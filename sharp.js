const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const target = path.resolve(__dirname, "src/public/images/heros");
const destination = path.resolve(__dirname, "dist/images/heros");

// ? Create new file if it doens't exist
if (!fs.existsSync(destination)) {
	fs.mkdirSync(destination, { recursive: true });
}

// ? Rezising image size
fs.readdirSync(target).forEach((image) => {
	// ? Filtering image format
	if (!image.match(/\.(jpg|jpeg|png)$/)) return;

	const inputFilePath = path.join(target, image);
	const outputFileName = image.split(".").slice(0, -1).join(".");

     // * Resizing image with 720px size and "-large.png" prefix
	sharp(inputFilePath)
		.resize(720)
		.toFile(path.join(destination, `${outputFileName}-large.png`))
		.catch((err) => console.error(`Error processing ${image}:`, err));

     // * Resizing image with 480px size and "-small.png" prefix
	sharp(inputFilePath)
		.resize(480)
		.toFile(path.join(destination, `${outputFileName}-small.png`))
		.catch((err) => console.error(`Error processing ${image}:`, err));
});
