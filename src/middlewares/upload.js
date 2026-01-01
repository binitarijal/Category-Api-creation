const multer = require("multer");
const path = require("path");

// storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueName + path.extname(file.originalname));
  },
});

// file filter (ONLY jpg png)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const ext = allowedTypes.test(
    path.extname(file.originalname).toLowerCase() //eutai banayera check garney 
  );
  const mime = allowedTypes.test(file.mimetype);

  if (ext && mime) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG, JPEG, PNG allowed"));
  }
};

const upload = multer({
  storage,
  fileFilter,
   limits: { fileSize: 2 * 1024 * 1024 }, // 2MB in bytes
})



module.exports = upload;
