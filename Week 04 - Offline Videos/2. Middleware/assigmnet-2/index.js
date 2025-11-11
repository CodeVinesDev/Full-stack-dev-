import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Folder path
const folderPath = path.resolve(__dirname, "./files");

// Route to get list of all files
app.get("/files", async (req, res) => {
  try {
    const files = await fs.promises.readdir(folderPath);
    return res.json({
      totalFiles: files.length,
      files: files,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to read folder" });
  }
});

// Route to read a specific file
app.get("/files/:filename", async (req, res) => {
  const filename = req.params.filename;

  try {
    // Get list of files in folder
    const files = await fs.promises.readdir(folderPath);

    // Check if requested file exists
    if (!files.includes(filename)) {
      return res.status(404).json({ error: "File not found" });
    }

    // Build full path to the file
    const filePath = path.join(folderPath, filename);

    // Read file content
    const content = await fs.promises.readFile(filePath, "utf-8");

    return res.json({
      filename: filename,
      content: content,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to read file" });
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
