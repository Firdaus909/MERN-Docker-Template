db = db.getSiblingDB('mern-db');
db.createCollection('users');
db.users.insert({ name: 'John Doe', email: 'john@example.com' });