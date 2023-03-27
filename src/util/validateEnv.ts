import {cleanEnv} from "envalid";
import {str, port} from "envalid/dist/validators";
// curly braces because inside those we can export multiple things inside this package
// there can be multiple things that can be exported from a module
// {CleanEnv, xys, abd}

// cleanEnv is function and we will export its return value
export default cleanEnv(process.env, {
    // in this we list all our environment variables
    MONGO_CONNECTION_STRING: str(),
    PORT: port(),
    // we didnt use number or str cause port() exists
});

// this will be exported and imported in server.ts