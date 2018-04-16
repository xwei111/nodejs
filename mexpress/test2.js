const express = require('express');
const app = express();

const tours = [
    {id:'0',name:'Hood River',price:99.99},
    {id:'1',name:'Oregon Coast',price:149.95}
];

app.get('/',function (req,res) {
    var id = req.query.id;
    var p = tours.some(function (p) {
    	console.log('p',p)
       return p.id == id;
    });
    if(p){
       console.log(p)
       res.json(tours)
    }else{
       res.json({error:'No such tour exists.'});
    }
});

app.listen(8888);
