const mongoose = require("mongoose");
const user = mongoose.Schema({
  collage: {
    type: String,
  },
  Brach: {
    type: String,
    },
    Pincode: {
        type: Number
  }
});
module.exports = ("user", mongoose);
