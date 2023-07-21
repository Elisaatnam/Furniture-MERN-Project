import "./config/config.js"; //als 1. importieren!!!
import express from "express";
import "./models/index.js"; // = running index.js
import multer from "multer";

//* CLOUDINARY Config
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUDNAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = 3001;

const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json());

//! ------------ GET ROUTES ------------------------
//- BigStuff "fetchen"
//- NotSoBigStuff "fetchen"
//- SmallStuff "fetchen"

//! ------------ POST ROUTES ------------------------
//- BigStuff hinzufuegen
//- NotSoBigStuff hinzufuegen
//- SmallStuff hinzufuegen

//! ------------ PUT ROUTES ------------------------
//- BigStuff editieren
//- NotSoBigStuff editieren
//- SmallStuff editieren

//! ------------ DELETE ROUTES ------------------------
//- BigStuff loeschen
//- NotSoBigStuff loeschen
//- SmallStuff loeschen
