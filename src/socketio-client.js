import { io } from "socket.io-client";
class ws {
    connect(name,room) {
        this.socket = io("http://localhost:8080", {
            transports: ['websocket'],
            query:{
                name,room
            },
        });
    }
    emit(event,data=""){
        this.socket.emit(event,data);
    }
    on(event,action){
        this.socket.on(event,action);
    }
}
export default ws;

// const receiveMsg = ws.on(async() => {
//     await ws.emit("");
// })

