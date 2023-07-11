import {getDiseasesData,getSelectedData} from "../controllers/controllers.js";
app.get("/data",getDiseasesData)

app.get("/search/:diseases",getSelectedData)