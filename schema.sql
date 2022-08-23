DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS events CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    profile_image VARCHAR DEFAULT 'https://cdn-icons-png.flaticon.com/512/892/892749.png?w=826&t=st=1661151778~exp=1661152378~hmac=158c2faebf46f5537354f8745216e0884e3c22587494756be74f7586958f5ccf',
    location VARCHAR(100),
    interests VARCHAR(100)
);

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    datetime TIMESTAMP NOT NULL,
    location VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    image_url VARCHAR DEFAULT 'https://res.cloudinary.com/dlbeiziwa/image/upload/v1661140420/close-up-recording-video-with-smartphone-during-concert_1153-7310_ylhbth.jpg',
    description VARCHAR(255),
    user_id SERIAL REFERENCES users (id) ON DELETE CASCADE
);


