// let's connect to our db
// importing app
import app from "./app";
// importing mongoose
import mongoose from "mongoose";
// importing our cleanENV, since the cleanEnv is a default export, we can name it anything
import env from "./util/validateEnv";
// because of this relating en with cleanEnv, we can use env.PORT
// and it will take care of undefined port and will crash the server automatically
// defining a port
// const port = 5000; 
// we arent supposed to get the port from here, we are supposed to get it from the environment variables
 const port = env.PORT;
//  process.env.PORT -- doesnt show error because they can accept undefined ports
// undefined port will run but this is not supposed to work
// so we can avoid this with if
// and make the program crash if the port is undefined
// i.e is a lot of work, so we use a package -- ENVALID
// it checks the env file, if nything is missing, it enforcex the schema & points out the error


// connecting mongoose to our mongoDB
// process.env -- is to process environment variables
// our variable is MONGO_CONNECTION_STRING
// process.env.MONGO_CONNECTION_STRING -- is showing error, becuse they wont accept undefined connection
// adding ! to mark it as important will make the code run BUT IT IS  NOT A GOOOD PRACTICE
// instead of process.env will just call it env, bc it related to the cleanEnv setup
mongoose.connect(env.MONGO_CONNECTION_STRING)
  // connect returns a promise, so we can use .then and .catch
  // a promise is an object that represents the eventual completion or failure of an asynchronous operation
  // a promise is in one of these states: pending, fulfilled, or rejected
  // .then is called when the promise is fulfilled
  .then(() => {
    console.log("mongoose connected")
    // for this routing to work, we need to start the server
    app.listen(port, () => {
      // app.listen(port!, () =>
      // the ! after port is to let the compiler know that port value can never be UNDEFINED
      // but this is NOT A good practice, eslint will point it out as a warning
      // giving this console.log to see if we started the server
      console.log("Server running on port:" + port)
    });
  })
  // .catch is called when the promise is rejected (when there is an error) 
  .catch(console.error); 


// short form for --save-dev is -D
// to execute eslint --- npx eslint . --ext .ts
// it is checking for ts file extensions

// we not using RESTful API cause they are stateless
// but this project needs states, so users can login and for each login there will be a session
// in our DB that connects to the server and lets the user know that they are logged in
// THIS is a violation of the REST constraints
// we not using rest, cause it's our own server and it is for one client

