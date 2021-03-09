const mongoose= require('mongoose')

URI=('mongodb://localhost/henrybank')

mongoose.connect(URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
 .then(db => console.log('base de datos conectada'))
 .catch(err => console.log(err))


 module.exports= mongoose;