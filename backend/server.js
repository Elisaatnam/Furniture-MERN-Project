import "./config/config.js"; //als 1. importieren!!!
import express, { application } from "express";
import "./models/index.js"; // = running index.js
import multer from "multer";

//* Models importieren
import { BigStuff } from "./models/BigStuffModel.js";
import { NotSoBigStuff } from "./models/NotSoBigStuffModel.js";
import { SmallStuff } from "./models/SmallStuff.js";

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
app.get("/api/bigstuff", async (req, res) => {
	try {
		const allBigStuff = await BigStuff.find();
		res.send(allBigStuff);
	} catch (err) {
		console.error(err);
		res.send("There was an error fetching the Big Stuff");
	}
});
//- NotSoBigStuff "fetchen"
app.get("/api/notsobigstuff", async (req, res) => {
	try {
		const allBigStuff = await NotSoBigStuff.find();
		res.send(allBigStuff);
	} catch (err) {
		console.error(err);
		res.send("There was an error fetching the Big Stuff");
	}
});
//- SmallStuff "fetchen"
app.get("/api/smallstuff", async (req, res) => {
	try {
		const allBigStuff = await SmallStuff.find();
		res.send(allBigStuff);
	} catch (err) {
		console.error(err);
		res.send("There was an error fetching the Big Stuff");
	}
});

//! ------------ POST ROUTES ------------------------
//- BigStuff hinzufuegen
app.post("/api/bigstuff", upload.single("image"), async (req, res) => {
	console.log(req.file);
	try {
		cloudinary.uploader
			.upload_stream(
				{
					resource_type: "image",
					folder: "FurnitureBig",
				},
				async (err, result) => {
					const response = await BigStuff.create({
						...req.body,
						image: { url: result.secure_url, imageId: result.public_id },
					});
					res.send(response);
				},
			)
			.end(req.file.buffer);
	} catch (err) {
		console.error(err);
	}
});

//- NotSoBigStuff hinzufuegen
app.post("/api/notsobigstuff", upload.single("image"), async (req, res) => {
	console.log(req.file);
	try {
		cloudinary.uploader
			.upload_stream(
				{
					resource_type: "image",
					folder: "FurnitureNotSoBig",
				},
				async (err, result) => {
					const response = await NotSoBigStuff.create({
						...req.body,
						image: { url: result.secure_url, imageId: result.public_id },
					});
					res.send(response);
				},
			)
			.end(req.file.buffer);
	} catch (err) {
		console.error(err);
	}
});
//- SmallStuff hinzufuegen
app.post("/api/smallstuff", upload.single("image"), async (req, res) => {
	console.log(req.file);
	try {
		cloudinary.uploader
			.upload_stream(
				{
					resource_type: "image",
					folder: "FurnitureSmall",
				},
				async (err, result) => {
					const response = await SmallStuff.create({
						...req.body,
						image: { url: result.secure_url, imageId: result.public_id },
					});
					res.send(response);
				},
			)
			.end(req.file.buffer);
	} catch (err) {
		console.error(err);
	}
});

//! ------------ PUT ROUTES ------------------------
//- BigStuff editieren
//- NotSoBigStuff editieren
//- SmallStuff editieren

//! ------------ DELETE ROUTES ------------------------
//- BigStuff loeschen
//- NotSoBigStuff loeschen
//- SmallStuff loeschen

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
