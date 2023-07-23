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
app.put("/api/bigstuff/:id", async (req, res) => {
	const { id } = req.params;
	const editedStuff = req.body;

	try {
		const dbRes = await BigStuff.findByIdAndUpdate(id, editedStuff, {
			new: true,
		}); //* Wenn man ein Dokument in MongoDB mit findByIdAndUpdate aktualisierst, wird standardmäßig das Dokument vor der Aktualisierung (das Originaldokument) zurückgegeben. Indem dmannew: true als Option angibt, weist man MongoDB jedoch an, das aktualisierte Dokument zurückzugeben.
		res.send(dbRes);
	} catch (err) {
		console.error(err);
	}
});

//- NotSoBigStuff editieren
app.put("/api/notsobigstuff/:id", async (req, res) => {
	const { id } = req.params;
	const editedStuff = req.body;

	try {
		const dbRes = await NotSoBigStuff.findByIdAndUpdate(id, editedStuff, {
			new: true,
		});
		res.send(dbRes);
	} catch (err) {
		console.error(err);
	}
});

//- SmallStuff editieren
app.put("/api/smallstuff/:id", async (req, res) => {
	const { id } = req.params;
	const editedStuff = req.body;

	try {
		const dbRes = await SmallStuff.findByIdAndUpdate(id, editedStuff, {
			new: true,
		});
		res.send(dbRes);
	} catch (err) {
		console.error(err);
	}
});

//! ------------ DELETE ROUTES ------------------------
//- BigStuff loeschen
app.delete("/api/bigstuff/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const dbRes = await BigStuff.findByIdAndDelete(id);
		cloudinary.uploader.destroy(dbRes.image?.imageId, err => console.log(err)); //bild aus der datenbank loeschen
		res.send("post has been deleted");
	} catch (err) {
		console.error(err);
	}
});

//- NotSoBigStuff loeschen
app.delete("/api/notsobigstuff/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const dbRes = await NotSoBigStuff.findByIdAndDelete(id);
		cloudinary.uploader.destroy(dbRes.image?.imageId, err => console.log(err));
		res.send("post has been deleted");
	} catch (err) {
		console.error(err);
	}
});

//- SmallStuff loeschen
app.delete("/api/smallstuff/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const dbRes = await SmallStuff.findByIdAndDelete(id);
		cloudinary.uploader.destroy(dbRes.image?.imageId, err => console.log(err));
		res.send("post has been deleted");
	} catch (err) {
		console.error(err);
	}
});

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
