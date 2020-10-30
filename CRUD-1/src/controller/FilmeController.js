const mongoose  = require('mongoose');

const Filme = mongoose.model('Filme');

module.exports = {
    async listar(req, res){
        const { page = 1 } = req.query;
        const Filmes =  await Filme.paginate({  }, { page, limit: 10 });

        return  res.json(Filmes);
    },

    async buscar(req, res){
        const filme = await Filme.findById(req.params.id);

        return res.json(filme);
    },

    async criar(req, res){
        const filme = await Filme.create(req.body);

        return res.json(filme)
    },

    async atualizar(req, res){
        const filme = await Filme.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(filme);
    },

    async deletar(req, res){
        const filme = await Filme.findByIdAndRemove(req.params.id);

        return res.send();
    }
}