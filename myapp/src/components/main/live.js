
import React, { Component } from 'react';

import {connect} from 'react-redux'
import img from "../../images/snap.png"
import { Jumbotron, Row, Col, Container } from 'react-bootstrap';
import ButtonB from '../UI/Button';

class Live extends Component {
  constructor(props) {
    super(props)
    this.state={
      images:'',
      screenshare:true
    }
    this.localVideoref = React.createRef()
    this.remoteVideoref = React.createRef()
    this.canvasref = React.createRef()

    this.socket = this.props.socket
    this.candidates = []
  }

  componentWillMount(){
    this.setState({socket:this.props.socket})

  }
  componentDidMount = () => {
    const socket=this.state.socket
      
    if(this.props.user.userData.isAdmin){
      this.context = this.canvasref.current.getContext('2d');
      this.context.width = this.canvasref.current.width;
      this.context.height = this.canvasref.current.height;
    }



      socket.on("broadcast",(stream)=>{
        console.log(stream)
        this.setState({
          images:stream
        })
      })

     

  //   this.socket.on('connection-success', success => {
  //     console.log(success)
  //   })

  //   this.socket.on('offerOrAnswer', (sdp) => {
  //   //   this.textref.value = JSON.stringify(sdp)
  //     this.pc.setRemoteDescription(new RTCSessionDescription(sdp))
  //   })

  //   this.socket.on('candidate', (candidate) => {
  //     this.pc.addIceCandidate(new RTCIceCandidate(candidate))
  //   })

  //   const pc_config = {
  //     "iceServers": [
  //       {
  //         urls : 'stun:stun.l.google.com:19302'
  //       },
  //       {
  //         url: 'turn:192.158.29.39:3478?transport=tcp',
  //         credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
  //         username: '28224511:1379330808'
  //       }
        
  //     ]
  //   }

  //   this.pc = new RTCPeerConnection(pc_config)

  //   this.pc.onicecandidate = (e) => {
  //     if (e.candidate) {
  //       this.sendToPeer('candidate', e.candidate)
  //     }
  //   }
    

  //   this.pc.oniceconnectionstatechange = (e) => {
  //     console.log(e)
  //   }

  //   this.pc.onaddstream = (e) => {
  //     this.remoteVideoref.current.srcObject = e.stream
  //   }

  // }

  // sendToPeer = (messageType, payload) => {
  //   this.socket.emit(messageType, {
  //     socketID: this.socket.id,
  //     payload
  //   })
  // }

  // createOffer = () => {

  //   console.log('Offer')
  //   this.pc.createOffer({ offerToReceiveVideo: 1 })
  //     .then(sdp => {
  //       this.pc.setLocalDescription(sdp)

  //       this.sendToPeer('offerOrAnswer', sdp)
        
 
  //   })

  }

  // createAnswer = () => {
  //   console.log('Answer')
  //   this.pc.createAnswer({ offerToReceiveVideo: 1 })
  //     .then(sdp => {
  //       this.pc.setLocalDescription(sdp)

  //       this.sendToPeer('offerOrAnswer', sdp)
  //   })
  // }

  // setRemoteDescription = () => {
  //   const desc = JSON.parse(this.textref.value)

  //   this.pc.setRemoteDescription(new RTCSessionDescription(desc))
  // }

  // addCandidate = () => {

  //   this.candidates.forEach(candidate => {
  //     console.log(JSON.stringify(candidate))
  //     this.pc.addIceCandidate(new RTCIceCandidate(candidate))
  //   });
  // }
    viewVideo=(video,context)=>{
      if(this.props.user.userData.isAdmin){

    this.context.drawImage(video,0,0,context.width,context.height);
    const roomname=this.props.roomname
    const y=this.canvasref.current.toDataURL('image/png')
    console.log(y)
    this.state.socket.emit('videostream',y,roomname);
}
  }
  startvideo=(e)=>{
      e.preventDefault()

      
    const success = (stream) => {
        const socket=this.state.socket
        const roomname=this.props.roomname
        // this.socket.emit("videostream",{stream,roomname})
        window.localStream = stream
        console.log('cxcx')
        this.localVideoref.current.srcObject = stream
         let u=this.localVideoref
         let c=this.context
        setInterval(()=>{
          
          this.viewVideo(u.current,c)
        },5);
        //this.pc.addStream(stream)
      }
   const failure = (e) => {
        console.log('getUserMedia Error: ', e)
      }
  
      const constraints = {
        audio: true,
        video: this.state.screenshare?{
          
                 displaySurface: 'monitor', // monitor, window, application, browser
            logicalSurface: true,
            cursor: 'always' // never, always, motion
        
        }:true
        
      }
      // var getUserMedia = navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;  
      this.state.screenshare?
      navigator.mediaDevices.getDisplayMedia(constraints)
      .then(success)
      .catch(failure)
      :
      navigator.mediaDevices.getUserMedia(constraints)
      .then(success)
      .catch(failure)
  
        // this.props.user.userData.isAdmin?
        // setInterval(()=>{
        //    this.createOffer() 
        //     },2000):
        //     console.log('hurray')
    
    }
    screenShareHandler=()=>{
        
      this.setState({screenshare:this.state.screenshare?false:true})
      this.context = this.canvasref.current.getContext('2d');
      this.context.width = this.canvasref.current.width;
      this.context.height = this.canvasref.current.height;
      
    
    
  }

  render() {
console.log( this.props.user.userData.isAdmin)
const share=this.state.screenshare?"Click video to start screen-sharing":"Click Video to start live-streaming";
  
return (

      <Container>
        
        {
      this.props.user.userData.isAdmin?
        <video
          style={{
            width:"100%",
            margin: 5,
            background:"black",
            border:"4px solid black"
          }}
          ref={ this.localVideoref }
          autoPlay
          onClick={(e)=>{this.startvideo(e)}}
          >
        </video>:
        <img
          style={{
            width:"100%",
            height:"600px",
            margin: 5,

            border:"1px solid black"
          }}
          src={this.state.images}
          />
  }

{
      this.props.user.userData.isAdmin?
        
      <canvas style={{display:"none",width:"1600px",height:"700px"}} id="preview" ref={ this.canvasref }></canvas>
      
      
      :null
  }
  {
    this.props.user.userData.isAdmin?
        
    <ButtonB id="contact-submit" onClick={this.screenShareHandler} text={share}/>
    
   
    :null
  }

      
      

      </Container>
    )
  }
}

const mapStateToProps=(state)=>{
       
    return{
      user:state.member
    }
      
}

export default connect(mapStateToProps)(Live);
