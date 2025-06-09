import sharp from "sharp";
import { promises as fs } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imageDir = join(__dirname, "../public/images/ministries");
const optimizedDir = join(__dirname, "../public/images/ministries/optimized");

async function optimizeImages() {
  try {
    // Create optimized directory if it doesn't exist
    await fs.mkdir(optimizedDir, { recursive: true });

    // Get all image files
    const files = await fs.readdir(imageDir);

    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = join(imageDir, file);
        const outputPath = join(optimizedDir, `optimized-${file}`);

        // Optimize image
        await sharp(inputPath)
          .resize(1200, 800, {
            // Set reasonable max dimensions
            fit: "inside",
            withoutEnlargement: true,
          })
          .jpeg({ quality: 80, progressive: true }) // Use progressive JPEGs
          .toFile(outputPath);

        console.log(`Optimized: ${file}`);
      }
    }

    console.log("Image optimization complete!");
  } catch (error) {
    console.error("Error optimizing images:", error);
  }
}

optimizeImages();
