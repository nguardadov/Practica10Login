const moongose = require('mongoose');
const {mongodb} = require('./keys');

moongose.connect(mongodb.URI,{
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(db=>console.log('Connection success!!'))
.catch(err=>console.error(err));

