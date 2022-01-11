const mongoose = require('mongoose');
import 'dotenv/config';

const { DB_URI } = process.env;
export class DatabaService {

    static init() {
       mongoose.connect(`${DB_URI}`);
    }    
}