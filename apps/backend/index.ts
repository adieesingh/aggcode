import {WebSocketServer} from "ws";
import {WorkspaceModel} from "db"
import mongoose from "mongoose";
mongoose.connect(process.env.DB_URL!).then(()=>console.log("mongodb is connected")).catch((err)=>console.error(err));
const server = new WebSocketServer({port:8080});

server.on("connection",(ws)=>{
    ws.on("message",(msg)=>{
        console.log(msg);
        WorkspaceModel.create({
            path:"123",
            name:"Adarsh"
        })
        ws.send("Hi There");
    })
})