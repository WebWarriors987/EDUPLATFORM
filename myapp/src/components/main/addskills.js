import React, { Component } from 'react';
import {connect} from 'react-redux'
import {update,validform, generatedata} from '../utils/formtions'
import {addskill}  from '../actions/recordactions'
import FormFields from '../utils/formfields';
class Addskill extends Component {

    state={ 
        formSuccess:false,
        formError:false,
        formdata:{
        skill: {
            element:'input',
            value:'',
            config:{
                name:'SKILL',
                placeholder:'Type the skill you have',
                type:'text'
            },
            validation:{
                required:false
            },
            valid:true,
            validationMessage:'',
            label:true
        },
    }
}

updateform=(element)=>{
    const newdata=update(element,this.state.formdata,'register')
    this.setState({
        formdata:newdata,
    })

}



submitform=(event)=>{
    event.preventDefault();
    const isformvalid=validform(this.state.formdata,'register')
    console.log(isformvalid)
    const data=generatedata(this.state.formdata,'register')
    console.log(this.props.user.member)
    if(true){
        this.props.dispatch(addskill(data)).then((response)=>{
            console.log('hjhj')
             console.log('hurray')
                this.setState({
                    formSuccess:true,
                    formError:false,
                })
                setTimeout(()=>{
                    this.props.history.push('/skill');
                },500)

          
            }
        )}
    }

    render() {
        console.log(this.props)
        return (
            <div className="container">
            <div className='add'>
                <div className="row">
                <div className="headtitle">
                    <h2 className="neon" style={{fontFamily: 'IBM Plex Serif'}}>ADD A SKILL</h2>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                </div><br></br><br></br>
        <div className="jumbotron">

            <div className="row">
            <div className="each">
               <FormFields
                  formdata={this.state.formdata.skill}
                  id={'skill'}
                  change={(event)=>{this.updateform(event)}}
                />
            </div>
            </div>
            
          
            <div className="block row">
          <center>   
            <button className="btn btn-primary" style={{padding:"10px"}} onClick={(event)=> this.submitform(event)}>
                SUBMIT THIS INFORMATION
             </button>
                </center>
                 </div>
            </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    
       
    return{
      user:state.member,
    }
      
}

export default connect(mapStateToProps)(Addskill);