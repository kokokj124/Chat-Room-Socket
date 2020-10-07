var socket = io("127.0.0.1:3000")

socket.on("server-send-rooms", data=>{
    $("#dsRoom").html("")
    data.map(r=>{
        $("#dsRoom").append("<h4 class='room'>" + r + "</h4>")
    })
})

socket.on("server-send-room-socket", data=>{
    $("#roomHienTai").html(data)
})

socket.on("server-chat", data=>{
    $("#right").append("<div>" + data + "</div>")
})

$(document).ready(function(){
    $("#btnTaoRoom").click(()=>{
        socket.emit("tao-room", $("#txtRoom").val());
    })

    $("#btnChat").click(()=>{
        socket.emit("user-chat", $("#txtMessage").val())
    })
});