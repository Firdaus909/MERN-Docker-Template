const dbName = process.env.MONGO_DB_NAME || 'db';

db = db.getSiblingDB(dbName);
db.createCollection('users');
db.users.insert({ name: 'John Doe', email: 'john@example.com' });
