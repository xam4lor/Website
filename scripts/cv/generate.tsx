// Writes a local preview of the CV served at /cv.pdf. Usage: npm run cv:pdf

import fs from "node:fs/promises";
import path from "node:path";
import { renderCv } from "./document";

const OUTPUT_PATH = path.join(process.cwd(), "cv.pdf");

renderCv()
	.then((pdf) => fs.writeFile(OUTPUT_PATH, pdf))
	.then(() => console.log(`CV generated at ${path.relative(process.cwd(), OUTPUT_PATH)}`))
	.catch((err) => {
		console.error("Failed to generate CV:", err);
		process.exit(1);
	});
