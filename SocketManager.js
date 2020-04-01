const io = require('./server.js').io
let availableRooms=[]
let connectedPeers = new Map()


module.exports = function(socket){

	socket.emit('verifyroom',findRooms())
	// roomList()

      socket.on('error',function(err){
       console.log(err)
	  })

	socket.emit('connection-success', { success: socket.id })

	connectedPeers.set(socket.id, socket)
  
	socket.on('disconnect', () => {
	  console.log('disconnected')
	  connectedPeers.delete(socket.id)
	})

	socket.on("videostream",({stream,roomname})=>{
		console.log("Hi",stream,roomname);
		
		socket.broadcast.to(roomname).emit("broadcast",stream)
	})
  
	socket.on('offerOrAnswer', (data) => {
	  for (const [socketID, socket] of connectedPeers.entries()) {
		if (socketID !== data.socketID) {
		  console.log(socketID, data.payload.type)
		  socket.emit('offerOrAnswer', data.payload)
		}
	  }
	})
  
	socket.on('candidate', (data) => {
	  for (const [socketID, socket] of connectedPeers.entries()) {
		if (socketID !== data.socketID) {
		  console.log(socketID, data.payload)
		  socket.emit('candidate', data.payload)
		}
	  }
	})

   socket.on('joinroom',(roomname)=>{
	   console.log("JOINED")
	   socket.join(roomname)
	   
   })
   socket.on('subscribe', function(data) { socket.join(data); })

	socket.on("message",({roomname,user,message})=>{
		const mess={
				
				message

		}
		console.log(roomname,user)
	
		io.of('/').to(roomname).emit("activemessage",{message,user})


		console.log(getAllRoomMembers(roomname))
		console.log(mess)
	})


	function getAllRoomMembers(room, _nsp) {
		var roomMembers = [];
		var nsp = (typeof _nsp !== 'string') ? '/' : _nsp;
	
		for( var member in io.nsps[nsp].adapter.rooms[room] ) {
			roomMembers.push(member);
		}
	
		return roomMembers;
	}
	
}


function findRooms() {
	var rooms = io.sockets.adapter.rooms;
	 availableRooms=[]
	 console.log(rooms)
    if (rooms) {
        for (var room in rooms) {
            if (!rooms[room].hasOwnProperty(room)) {
				console.log(room)
                availableRooms.push(room);
            }
        }
    }
    return availableRooms;
}

function roomList(){
	let rooms=findRooms()
	console.log(rooms)
	io.emit('rooms',rooms)
}

function isUser(userList, username){
  	return username in userList
}
