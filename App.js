const express=require('express');

var app=express();

app.get('/', (req,res)=>{
    res.send("Hello Express");
});

app.post('/', (req, res)=>{
    res.send("You have sent a message to the server");
});

app.get('/Books', (req, res)=>{
    res.send("Welcome to the books section.")
});

app.get('/Books/Chapter-1', (req, res)=>{
    res.send("Chapter 1");
});

app.get('/Students/:studentid/books/:bookid', (req, res)=>{
    res.send(req.params)
})

app.get('/example/b', (req, res, next)=>{
    console.log("This is the first callback function")
    next()
}, (req, res, next)=>{
    console.log("This is a test from the second callback function")
    next()
}, (req, res)=>{
    res.send("This is a test from the third callback function")
})

var ch0 = (req, res, next)=>{
    console.log("ch0");
    next();
}
var ch1 = (req, res, next)=>{
    console.log("ch1");
    next();
}
var ch2 = (req, res)=>{
    res.send("Hello from C family");
}

app.get('/example/c', [ch0, ch1, ch2])


var server=app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});
