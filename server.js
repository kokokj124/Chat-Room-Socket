var express = require("express");
var app = express();
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views","./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

io.on("connection", socket=>{
    socket.on("tao-room", data=>{
        socket.join(data)
        socket.Phong=data

        var array=[]
        for(room in socket.adapter.rooms){
            array.push(room)
        }
        io.sockets.emit("server-send-rooms", array)
        socket.emit("server-send-room-socket", data)

        socket.on("user-chat", data=>{
            io.sockets.in(socket.Phong).emit("server-chat", data)
        })

    })
})

app.get("/", (req, res)=>{
    res.render("trangchu")
})