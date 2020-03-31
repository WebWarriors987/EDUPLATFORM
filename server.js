const express=require('express');
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const mongoose=require('mongoose')
const formidable=require('express-formidable')
const {auth}=require('./server/middleware/auth')
const cloudinary=require('cloudinary')
const {Record}=require("./server/models/records")
const {Member}=require("./server/models/Member")
const jwt=require('jsonwebtoken')
const fs = require('fs')

var nodemailer = require('nodemailer');

var compression = require('compression'); 

const app=express()
const port = process.env.PORT || 3002;


const server = require('http').Server(app);
 const io = module.exports.io=require('socket.io')(server);

 const SocketManager = require('./SocketManager')

 io.on('connection', SocketManager)

require('dotenv').config();
mongoose.Promise=global.Promise
mongoose.connect(process.env.MONGODB_URI)
app.use(compression());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cookieParser());

app.use(express.static('myapp/build'))


cloudinary.config({
    cloud_name:'dn2ggvd3y',
    api_key:'979486569862623',
    api_secret:'RkNc66XFAQyK7770d9EYbDpAwUo'
})


const defaultemail={from:'webwarriors123@gmail.com'}

const sendmail=(emaildata)=>{
    const compemail=Object.assign(defaultemail,emaildata)
     
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'webwarriors123@gmail.com',
      pass: '!@#SauSam'
    }
  });
  
  return  transporter.sendMail(compemail, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}  

    app.post('/api/members/register',(req,res)=>{
     console.log('dsd')
     const member = new Member(req.body);
     console.log(member)
     member.save((err,doc)=>{
        if(err) {
            console.log(err)
            return res.json({success:false,err});
        }
            console.log(doc.name) 

        const emaildata={
            to:req.body.email,
            subject:'REGISTRATION',
            text:"YOU ARE REGISTERED FOR EDUSTREAM",
            html:`<p>WELCOME,${doc.name} TO EDUSTREAM</p>`
        }
        
     sendmail(emaildata)
           
     res.status(200).json({
            success: true,doc
                        })
        
        })
     });




    app.post('/api/members/forgetpassword',(req,res)=>{
        Member.findOne({'email':req.body.email},(err,member)=>{
        if(!member){
        res.status(400).json({
            loginSuccess:false,
            message:'Unable to Login'
        })
        }
        console.log(member.password)
        var token="foslkkkkkkkkkkrgsllllllllllllsdejhgehaot"+member.password;
        console.log(token)
        const emaildata={
            to:req.body.email,
            subject:'Password reset',
            text:"Please follow the informations to reset your password:http://chessnitdgp.herokuapp.com/resetpass?token=${token}",
            html:`<p>Please click the following link</p><p>http://chessnitdgp.herokuapp.com/resetpass?token=${token}</p>`
        }
        Member.update({email:req.body.email},{$set:{resetpasslink:token}},function(err,member){
           if(err) return res.send(err)
           else 
           sendmail(emaildata)
           res.status(200).json({message:"email has been sent"})
       })
    }) 
});


   app.post('/api/members/forgetpass',(req,res)=>{
    
      console.log(req.body.data.password)
      Member.findOne({'resetpasslink':req.body.reset.token},(err,member)=>{
        if(!member){
        res.status(400).json({
            loginSuccess:false,
            message:'Unable to Login'
        })
        }
        console.log(member)
        member.password=req.body.data.password
        console.log(member)
        const emaildata={
            to:member.email,
            subject:'Password reset',
            text:"Reset Successful",
            html:`<p>Reset Successful</p>`
        }

    member.save((err,doc)=>{
        if(err) {
            console.log(err)
            return res.json({success:false,err});
        }
            console.log(doc)    
   
            sendmail(emaildata)
            res.status(200).json({success:true,message:"Reset done"})
        })

    
        
        
    })

    })
        
app.get('/api/members/logout',auth,(req,res)=>{
    console.log(req.user._id)
    Member.findOneAndUpdate(
        { _id:req.user._id },
        { token: '' },
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success: true
            })
        }
    )
})





app.post('/api/members/login',(req,res)=>{
    Member.findOne({'email':req.body.email},(err,member)=>{
        if(!member){
     return   res.json({
            loginSuccess:false,
            message:'Unable to Login'
        })
        }
           member.comparepassword(req.body.password,(err,match)=>{
            if(!match){
        return        res.json({
                    loginSuccess:false,
                    message:'Unable to Login'
                })
                }

            member.generateToken((err,member)=>{
                if(err) return res.send(err);
                        res.cookie('w_auth',member.token).status(200).json({
                        loginSuccess: true,
                        member:member
                    })
                })
              })
    

    })
})


app.get('/api/records/allalum',auth,(req,res)=>{
   console.log('hhhh')
    Record
    .find()
    .exec((err,allalum)=>{
        if(err){
            console.log(err)
            res.status(400).send(err)
            
        }
       return res.status(200).send(allalum)
    })
 })

//  app.get('/api/records/allawards',(req,res)=>{
//     console.log('hhhh')
//      Award
//      .find()
//      .exec((err,allawards)=>{
//          if(err){
//              console.log(err)
//              res.status(400).send(err)
             
//          }
//         return res.status(200).send(allawards)
//      })
//   })
 
//   app.get('/api/records/allacademic',(req,res)=>{
//     console.log('hhhh')
//      Academic
//      .find()
//      .exec((err,allacademic)=>{
//          if(err){
//              console.log(err)
//              res.status(400).send(err)
             
//          }
//         return res.status(200).send(allacademic)
//      })
//   })
 
 
app.post('/api/records/searchyr',auth,(req,res)=>{
    console.log(req.body)
    Record.find( {$or: [
        {"year":req.body.year}, {"name":req.body.year},{"workplace":req.body.year}
     ]},(err,result)=>{
        
      console.log(result) 
      console.log(err)
      if(err){
        console.log(err)
        return  res.status(400).send(err)
      }
     res.status(200).json({
          resyr:result
    })
})
})


app.post('/api/records/writeuser',auth,(req,res)=>{
    if(fs.existsSync(`./${req.body.roomname}.json`)){

    let users=fs.readFileSync(`./${req.body.roomname}.json`)
    
    users=JSON.parse(users)
    console.log(users)
    users=users.concat(req.body.user)
    console.log(users)
    try{
        fs.writeFileSync(`./${req.body.roomname}.json`, JSON.stringify(users) , 'utf-8')
        res.status(200).json({
            successwrite:"filecreated"
        })
       }catch(e){
           console.log(e)
           res.status(400).json({
            successwrite:"FILE NOT CREATED"
        })
       }
     }else{
    let users=[]   
    console.log(req.body.user)  
    users=users.concat(req.body.user)
    console.log(users)
    console.log(JSON.stringify(users))
    try{
        fs.writeFileSync(`./${req.body.roomname}.json`, JSON.stringify(users) , 'utf-8')
        res.status(200).json({
            successwrite:"filecreated"
        })
       }catch(e){
           console.log(e)
           res.status(400).json({
            successwrite:"FILE NOT CREATED"
        })
       }
     }
 
})


app.post('/api/records/endsession',auth,(req,res)=>{
    try{
           var attachments={   
              filename: `ATTENDANCE FILE OF${req.body.room} `,
              path: `./${req.body.room}.json`
                 }
            const emaildata={
                    to:req.body.email,
                    subject:'ATTENDANCE',
                    text:"HERE IS YOUR ATTENDANCE FILE",
                    attachments:attachments,
                    html:`<p>HERE IS YOUR ATTENDANCE FILE</p>`
                }

                fs.unlinkSync(`./${req.body.room}.json`)
                sendmail(emaildata)
                res.status(200).json({
                    endsession:"SUCCESSFUl"
                })
            }catch(e){
                console.log(e)
                res.status(400).json({
                    endsession:e
                })
        
            }
})


app.post('/api/records/adddetail',auth,(req,res)=>{
  
    const record = new Record(req.body);
    record.save((err,doc)=>{
        console.log(err)
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success: true,doc
        })
        console.log(doc.name)  
    })
})


app.post('/api/records/addacademic',auth,(req,res)=>{
    Member.findOne({
        '_id':req.user._id
     }).then(response=>{
         console.log(response.email)
    Record.findOne({'email':response.email},(err,record)=>{
        if(!record){
        res.status(400).json({
            loginSuccess:false,
            message:'Unable to Add Your Record'
        })
        }else{
            console.log("hfffffh")
            console.log(req.body)
            console.log(req.body)
            record.academicrecords.push(req.body)
            record.save((err,doc)=>{
                if(err) return res.json({success:false,err});
                
                res.send(doc.name)
                
            })
        }
    })
   
})
})

app.post('/api/records/addaward',auth,(req,res)=>{
    Member.findOne({
        '_id':req.user._id
     }).then(response=>{
         console.log(response.email)
    Record.findOne({'email':response.email},(err,record)=>{
        if(!record){
        res.status(400).json({
            loginSuccess:false,
            message:'Unable to Add Your Record'
        })
        }else{
            console.log("hfffffh")
            console.log(req.body)
            console.log(req.body)
            record.awards.push(req.body)
            record.save((err,doc)=>{
                if(err) return res.json({success:false,err});
                
                res.send(doc.name)
                
            })
        }
    })
   
})
})



app.post('/api/records/addskill',auth,(req,res)=>{
    Member.findOne({
        '_id':req.user._id
     }).then(response=>{
         console.log(response.email)
    Record.findOne({'email':response.email},(err,record)=>{
        if(!record){
        res.status(400).json({
            loginSuccess:false,
            message:'Unable to Add Your Record'
        })
        }else{
            console.log("hfffffh")
            console.log(req.body)
            console.log(req.body)
            record.skills.push(req.body)
            record.save((err,doc)=>{
                if(err) return res.json({success:false,err});
                
                res.send(doc.name)
                
            })
        }
    })
   
})
})


app.post('/api/records/removerecord',auth,(req,res)=>{
    Record.findByIdAndRemove({'email':req.body.email},(err,member)=>{
        if(!member){
        res.status(400).json({
            loginSuccess:false,
            message:'Unable to Add Your Details'
        })
        }
    })   
    })

    app.get('/api/records/getrecords',auth,(req,res)=>{
    Member.findOne({
       '_id':req.user._id
    }).then(response=>{
        console.log(response.email)
        Record
        .findOne({'email':response.email}).
        then((record)=>{
            console.log(record)
            res.send(record)
        }).catch(err=>{
            res.send(err)
        })
    }).catch(err=>{
        console.log(err)
    })
    })


app.get('/api/members/removeimage',auth,(req,res)=>{
    let image_id=req.query.public_id
    cloudinary.uploader.destroy(image_id,(error,result)=>{
        if(error) return res.json({success:false,error})
        res.status(200).send('ok')
    })
})
app.get('/api/members/auth',auth,(req,res)=>{
    res.status(200).json({
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        id:req.user.id,
        lastname: req.user.lastname,
        role: req.user.role,
        cart: req.user.cart,
        history: req.user.history
    })
})

app.post('/api/members/uploadimage',auth,formidable(),(req,res)=>{
    cloudinary.uploader.upload(req.files.file.path,(result)=>{
       res.status(200).send({
           public_id:result.public_id,
           url:result.url
       })
    },{
        public_id:`${Date.now()}`,
        resource_type:'auto'
    })
})

if( process.env.NODE_ENV === 'production' ){
    const path = require('path');
    app.get('/*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'./myapp','build','index.html'))
    })
}

server.listen(port,()=>{
    console.log(`Server Running at ${port}`)
})