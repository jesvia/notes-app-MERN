// fist will be .env dependency, we need to import it as early as possible
import "dotenv/config";
import express from "express";
// importing our note we cn name the import anything caue it is default export
import NoteModel from "./models/note";

const app = express();
// app is our server
// Calls the express function "express()" and puts new
//  Express application inside the app variable (to start a new Express application)

// this is a routing method -- GET and POST -- it is an END point
// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
    res.send("Hello, World!");
  });
// to use app in our server we need to export it
// we are exporting expresse app which calls our end points
export default app;
// if we want to use mongoose, we define a model to use in our database