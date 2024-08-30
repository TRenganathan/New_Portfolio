// Use server-side only directive

import { promises as fsPromises } from "fs";
import formidable from "formidable";

// Configure Formidable to handle file uploads
const form = formidable({
  multiples: false,
  uploadDir: "./public/uploads",
  keepExtensions: true,
});

// Helper function to parse the form
const parseForm = (req) => {
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

export default async (req, res) => {
  console.log(req);

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { files } = await parseForm(req);
    const file = files.file; // 'file' should match the field name in the form data

    // Optionally move the file to a desired location
    const filePath = `./public/uploads/${file.originalFilename}`;
    await fsPromises.rename(file.filepath, filePath);

    res.status(200).json({ message: "File uploaded successfully", filePath });
  } catch (error) {
    res
      .status(500)
      .json({ error: "File upload failed", details: error.message });
  }
};

// Disable Next.js's default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};
