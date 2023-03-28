// need to define a schema

import { InferSchemaType, model, Schema } from "mongoose";

// schema decides what kind of data our note should contain
const noteSchema = new Schema({
    // here configuration of the schema goes
    // each note should have title, text and a time stamp -- when note was created/ last updated
    // we need to type String (uppercase) -- cause they are constructor of these types
    title: {type: String, required: true}, // each note MUST have a title
    // text is optional, need not be required
    text: {type: String},
    // not creating timeStamps manually, mongoose will do it for us
    // we going outside of this curly braces
}, {timestamps: true});
// this is normal javascript
// we just consdtrcted our function here

// in typescript -- we need to add another step, cause we want tp have another type
// for this node in ou code available -- so we get type safety and auto completion
// for all the fields in the object -- like title and text..
// type is a keyword in typescript -- to add another type areas -- TO CREATE ANOHER TYPE

// InferSchemaType is type we get form mongoose - it adds another import
// <> is to add another type argument to the InferSchemaType type 
type Note = InferSchemaType<typeof noteSchema>;
// this creates a note type by looking at the schema 

// we need to export this schema
// model is a mongoose function 
// model<Note> -- creates a model of type 'Note'
// ("Note") -- will create a collection in the MongoDB called 'Note'
// it will actually turn into a plural -- Notes
export default model<Note>("Note", noteSchema);