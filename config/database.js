const mongoClient=require('mongodb').MongoClient
const state ={
    db:null
}
module.exports.connect =function(done){
    const url ='mongodb+srv://username:username@cluster101.0ktl0i6.mongodb.net/?retryWrites=true&w=majority'
   // const url ='mongodb://localhost:27017'
    const dbname = 'test_hbs'

    mongoClient.connect(url,(err,data)=>{
        if (err) return done(err)
        state.db = data.db(dbname)
        done()
    })
}

module.exports.get=function(){
    return state.db
}
