import { cleanEnv } from "../../node_modules/envalid/dist/envalid";
import { str } from "../../node_modules/envalid/dist/validators";

export function validateEnv() {
    cleanEnv(process.env, { 
        DB_URI: str(),
    });
}