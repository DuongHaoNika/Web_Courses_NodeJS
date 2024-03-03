const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/ptit_dev', {});
        console.log('OK');
    } catch (error) {
        console.log('Error');
    }
}

module.exports = { connect };
