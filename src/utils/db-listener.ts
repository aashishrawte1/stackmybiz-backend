const mongoose = require('mongoose');
import 'dotenv/config';

const db_uri = process.env.DB_URI;

mongoose.connect(db_uri);