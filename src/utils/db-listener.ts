const mongoose = require('mongoose');
import 'dotenv/config';

const { DB_URI } = process.env;
export class DatabaService {

    static async init() {
       await mongoose.connect(`${DB_URI}`);
    }    
}