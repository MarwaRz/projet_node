const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  capacite: { type: Number, required: true },
  localisation: { type: String, required: true }, 
  description: { type: String, required: true },

  image: { type: String } 
});

module.exports = mongoose.model('Room', RoomSchema);
