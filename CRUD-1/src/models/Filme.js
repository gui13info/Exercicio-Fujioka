const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const FilmeSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
   sinopse: {
       type: String,
       required: true,
   },
   createdAt: {
       type: Date,
       default: Date.now,
   },
});

FilmeSchema.plugin(mongoosePaginate);

mongoose.model('Filme', FilmeSchema);