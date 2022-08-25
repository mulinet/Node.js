const fs = require("fs");
const path = require("path");
const axios = require("axios").default;
const dotenv = require("dotenv");
dotenv.config();

const baseURL = process.env.BASE_URL;
const baseURN = process.env.BASE_URN;

const downloadFile = async (fileUrl) => {
  let fileName = path.basename(fileUrl);
  let localFilePath = path.resolve(process.env.DOWN_PATH, fileName);
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
    let directory = fs.existsSync(process.env.DOWN_PATH);
    if(!directory) fs.mkdirSync(process.env.DOWN_PATH);
    await downloadFile(baseURL + baseURN);
}

fn_excuteInit();
