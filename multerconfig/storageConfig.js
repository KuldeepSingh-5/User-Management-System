// const multer = require("multer");

// // storage config
// const storage = multer.diskStorage({
//     destination:(req,file,callback) =>{
//         callback(null,"./uploads")
//     },
//     filename:(req,file,callback)=>{
//         const filename = `image-${Date.now()}.${file.originalname}`
//         callback(null,filename)
//     }
// });

// // filter

// const filefilter = (req,file,callback)=>{
//     if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
//         callback(null,true)
//     }else{
//         callback(null,false)
//         return callback(new Error("Only .png .jpg & .jpeg formatted Allowed"))
//     }
// }

// const upload = multer({
//     storage:storage,
//     fileFilter:filefilter
// });

// module.exports = upload;






const multer = require("multer");
const path = require("path");
const fs = require("fs");

// ensure folder exists
const uploadPath = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, uploadPath);
    },
    filename: (req, file, callback) => {
        // 🔥 yahi main fix hai
        const filename = "image-" + Date.now() + path.extname(file.originalname);
        callback(null, filename);
    }
});

const filefilter = (req, file, callback) => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
    ) {
        callback(null, true);
    } else {
        callback(new Error("Only images allowed"), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: filefilter
});

module.exports = upload;