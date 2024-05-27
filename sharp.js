const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const target = path.resolve(__dirname, "src/public/images/heros");
const destination = path.resolve(__dirname, "dist/images/heros");

if (!fs.existsSync(destination)) {
	fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
     // * Resizing image with 1024px size and "-large.jpg" prefix
	sharp(`${target}/${image}`)
		.resize(1024)
		.toFile(
			path.resolve(
				__dirname,
				`${destination}/${image.split(".").slice(0, -1).join(".")}-large.jpg`,
			),
		);
     // * Resizing image with 1024px size and "-large.jpg" prefix
	sharp(`${target}/${image}`)
		.resize(720)
		.toFile(
			path.resolve(
				__dirname,
				`${destination}/${image.split(".").slice(0, -1).join(".")}-small.jpg`,
			),
		);
});
