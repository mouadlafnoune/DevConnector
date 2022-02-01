const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const express = require('express');

const connectDB = async () => {
    try {
      await  mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('mongodb Connected')
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;