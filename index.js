const http = require('http');
const util = require('util');
var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
// https://github.com/node-formidable/node-formidable
const formidable = require('formidable');

//https://www.npmjs.com/package/dotenv
const cloudinary = require("cloudinary");



cloudinary.config({
    cloud_name: "dqvq5bo0u",
    api_key: "448124316576359",
    api_secret: "vpXqcJQ0dUIPIqCYGQKqWXSMHCk"
});

app.post('/upload', function (req, res, next) {
        // parse a file upload
        const form = formidable();

        form.parse(req, (err, fields, files) => {
          //console.log(files)

            //https://cloudinary.com/documentation/upload_images
            cloudinary.uploader.upload(files.files.filepath, result => {

                //console.log(result)
                res.end(util.inspect(result.url));
                return;
           
            }
            );
        });
        return;
})


app.listen(4000, function () {
    console.log('CORS-enabled web server listening on port 4000')
  })

  



