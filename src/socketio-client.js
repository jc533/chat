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
    disconnect(){
        if(this.socket){
            this.socket.disconnect();
        }   
    }
    emit(event,data=""){
        this.socket.emit(event,data);
    }
    on(event,action){
        this.socket.on(event,action);
    }
    once(event,action){
        this.socket.once(event,action);
    }
    removeAllListeners(){
        this.socket.removeAllListeners();
    }
}
export default ws;

