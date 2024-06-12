const mongoose=require("mongoose")
const schema=mongoose.Schema(

    {
        "consumerno":String,
        "billno":String,
        "userid":String,
        "email":String,
        "phoneno":String
    }
)
let billmodel=mongoose.model("bills",schema);
module.exports={billmodel}