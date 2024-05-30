const mongoose = require('mongoose');

class Database {
    async connect() {
        try {
            await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log('Database connection successful.');
        } catch(err) {
            console.log('Database connection error:', err);
        }
    }
}

module.exports = new Database();
