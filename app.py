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

@app.route("/events")
def home():
    cur = g.db["cursor"]
    query = "SELECT * FROM events"
    cur.execute(query)
    events = cur.fetchall()
    return jsonify(events)

@app.route("/users")
def user_home():
    cur = g.db["cursor"]
    query = "SELECT * FROM users"
    cur.execute(query)
    users = cur.fetchall()
    return jsonify(users)

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
