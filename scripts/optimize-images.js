import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageDir = path.join(__dirname, "..", "public", "images", "ministries");
const optimizedDir = path.join(imageDir, "optimized");

async function optimizeImages() {
  try {
    // Create optimized directory if it doesn't exist
    await fs.mkdir(optimizedDir, { recursive: true });

    // Get all image files
    const files = await fs.readdir(imageDir);

    for (const file of files) {
      // Skip the optimized directory itself
      if (file === "optimized") continue;

      // Check if file is an image
      if (file.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i)) {
        const inputPath = path.join(imageDir, file);
        const outputPath = path.join(optimizedDir, `optimized-${file}`);

        try {
          // Check if file exists and is readable
          await fs.access(inputPath);

          // Get file stats
          const stats = await fs.stat(inputPath);
          if (!stats.isFile()) continue;

          // Optimize image
          await sharp(inputPath)
            .resize(1200, 800, {
              fit: "inside",
              withoutEnlargement: true,
            })
            .jpeg({
              quality: 80,
              progressive: true,
              force: false, // Don't force JPEG for PNG files
            })
            .png({
              quality: 80,
              progressive: true,
              force: false, // Don't force PNG for JPEG files
            })
            .toFile(outputPath);

          console.log(`✓ Optimized: ${file}`);
        } catch (err) {
          console.error(`× Failed to optimize ${file}:`, err.message);
        }
      }
    }

    console.log("\n✨ Image optimization complete!");
  } catch (error) {
    console.error("Error during optimization process:", error);
    process.exit(1);
  }
}

optimizeImages();
