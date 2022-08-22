from flask import g
import psycopg2
from psycopg2.extras import RealDictCursor


def get_db():
    if 'db' not in g:
        connection = psycopg2.connect(
            host='localhost',
            database='mosh',
            user='demo',
            password='demo'
        )
        cursor = connection.cursor(cursor_factory=RealDictCursor)
        g.db = {
            'connection': connection,
            'cursor': cursor
        }
    return g.db

def close_db():
    db = g.pop('db', None)
    if db is not None:
        db['cursor'].close()
        db['connection'].close()