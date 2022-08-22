from flask import Flask, request, g, jsonify, session

from .db import get_db, close_db

from werkzeug.security import generate_password_hash, check_password_hash
import psycopg2 
import os

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY")

@app.before_request
def connect_to_db():
    get_db()

@app.after_request
def disconnect_from_db(response):
    close_db()
    return response

# Get request for all events into events variable

@app.route("/events")
def home():
    cur = g.db["cursor"]
    query = "SELECT * FROM events"
    cur.execute(query)
    events = cur.fetchall()
    return jsonify(events)

# Get request for all users into users variable

@app.route("/users")
def user_home():
    cur = g.db["cursor"]
    query = "SELECT * FROM users"
    cur.execute(query)
    users = cur.fetchall()
    return jsonify(users)

# Get request for all events within the specific category

@app.route("/events/<category>")
def show_events(category):
    cur = g.db["cursor"]
    query = """
        SELECT * FROM events
        JOIN users ON events.user_id = users.id
        WHERE events.category = %s
    """
    cur.execute(query, (category,))
    events = cur.fetchall()
    return jsonify(events)

# Post request for creating an event

@app.route("/events/new", methods=["POST"])
def new_event():
    name = request.form["name"]
    datetime = request.form["datetime"]
    location = request.form["location"]
    category = request.form["category"]
    image = request.files["image"]
    uploaded_image = cloudinary.uploader.upload(image)
    image_url = uploaded_image["url"]
    description = request.form["description"]
    user = session.get("user", None)

    if user is None:
        return jsonify(success=False, msg="You must be logged in to create an event")
    
    query = """
        INSERT INTO events
        (name, datetime, location, category, image_url, description, user_id)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        RETURNING *
    """

    g.db["cursor"].execute(query, (name, datetime, location, category, image_url, description, user["id"]))
    g.db["connection"].commit()
    event = g.db["cursor"].fetchone()
    return jsonify(event)

@app.route("/register", methods=["POST"])
def register():
    username = request.json["username"]
    password = request.json["password"]
    profile_image = request.files["profile_image"]
    uploaded_image = cloudinary.uploader.upload(image)
    image_url = uploaded_image["url"]
    location = request.json["location"]
    interests = request.json["interests"]
    
    password_hash = generate_password_hash(password)
    query = """
        INSERT INTO users
        (username, password_hash, image_url, location, interests)
        VALUES (%s, %s, %s, %s, %s)
    """
    cur = g.db["cursor"]
    try: 
        cur.execute(query, (username, password_hash, image_url, location, interests))
    except psycopg2.IntegrityError:
        return jsonify(success=False, msg="Username already taken")
    
    g.db["connection"].commit()
    user = cur.fetchone()
    session["user"] = user
    return jsonify(success=True, user=user)

@app.route("/login", methods=["POST"])
def login():
    username = request.json["username"]
    password = request.json["password"]

    query = """
        SELECT * FROM users
        WHERE username = %s
    """
    cur = g.db["cursor"]
    cur.execute(query, (username,))
    user = cur.fetchone()

    if user is None:
        return jsonify(success=False, msg="Username or password is incorrect")

    password_matches = check_password_hash(user["password_hash"], password)

    if not password_matches:
        return jsonify(success=False, msg="Username or password is incorrect")
    
    user.pop("password_hash")
    session["user"] = user
    return jsonify(success=True, user=user)

    @app.route("/logout", methods=["POST"])
    def logout():
        session.pop("user", None)
        return jsonify(success=True)
    
    @app.route("/is-authenticated")
    def is_authenticated():
        user = session.get("user", None)
        if user:
            return jsonify(success=True, user=user)
        else:
            return jsonify(success=False, msg="User is not logged in")