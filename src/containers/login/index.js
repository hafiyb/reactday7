import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { checkUser } from "../../actions";
import { useHistory } from "react-router";

class Login extends React.Component{

    componentDidUpdate(){
        this.checkStatus()
    }

    checkUser(){
        const inputName = this._inputName.value
        const inputPW = this._inputPW.value
        if(inputName !== '' && inputPW !== ''){
            const data = {
                username: inputName,
                password: inputPW
            }
            this.props.checkUser(data)
        }
        this._inputName.value =""
        this._inputPW.value =""
    }
    checkStatus(){
        if(this.props.user.status == true){
            window.location.href = 'http://hafiyb.github.io/home'
        }
        console.log('historytest')
    }


    render(){

        
        return(
            <div className='flex flex-col justify-center items-center ' style={{height:'100vh'}}>
                <h1 className="text-4xl m-10 border-b-2 border-black">Login</h1>
                <div>
                    <input type="text" className="border-black border-b-2 p-2 mr-2" placeholder="Username" ref={(a)=> this._inputName = a}/>
                    <input type="text" className="border-black border-b-2 p-2 mr-2" placeholder="Password" ref={(a)=> this._inputPW = a}/>
                    <button className="border-black border-2 p-2 rounded-lg" onClick={() => this.checkUser()}>Submit</button>
                </div>
                <Link to="/register" className="m-10 border-2 p-2 rounded-md">Register?</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    user : state.user
})
const mapDispatchToProps = {
    checkUser : checkUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)