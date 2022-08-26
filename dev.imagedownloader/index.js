const fs = require("fs");
const path = require("path");
const axios = require("axios").default;
const dotenv = require("dotenv");
dotenv.config();

const _baseUrl = process.env.BASE_URL;
const _baseUrn = process.env.BASE_URN;
const _downloadPath = process.env.DOWN_PATH;

const downloadFile = async (fileUrl) => {
  let fileName = path.basename(fileUrl);
  let localFilePath = path.resolve(_downloadPath, fileName);
  try {
    let response = await axios({
      method: "GET",
      url: fileUrl,
      responseType: "stream"
    });
    
    if (response.headers["content-type"].indexOf("image") > -1){
        let w = response.data.pipe(fs.createWriteStream(localFilePath));
        w.on("finish", () => {
          console.log("Successfully downloaded file!");
        });
    }
  } catch (err) {
    console.log(err.toString());
    process.exit(1);
  }
};

const fn_excuteInit = async()=>{
    let directory = fs.existsSync(_downloadPath);
    if(!directory) fs.mkdirSync(_downloadPath);
    await downloadFile(_baseUrl + _baseUrn);
}

fn_excuteInit();
