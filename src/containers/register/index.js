import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addUser } from "../../actions";


class Register extends React.Component{

addUser(){
    const inputName = this._inputName.value
    const inputPW = this._inputPW.value
    if(inputName !== '' && inputPW !== ''){
        const data = {
            username: inputName,
            password: inputPW
        }
        this.props.addUser(data)
    }
    this._inputName.value =""
    this._inputPW.value =""
}

    render(){
        return(
            <div>
                <div className='flex flex-col justify-center items-center ' style={{height:'100vh'}}>
                <h1 className="text-4xl m-10 border-b-2 border-black">Register</h1>
                <div>
                    <input type="text" className="border-black border-b-2 p-2 mr-2" placeholder="Username?" ref={(a)=> this._inputName = a}/>
                    <input type="text" className="border-black border-b-2 p-2 mr-2" placeholder="Password?" ref={(a)=> this._inputPW = a}/>
                    <button className="border-black border-2 p-2 rounded-lg" onClick={() => this.addUser()}>Submit</button>
                </div>
                <Link to="/" className="m-10 border-2 p-2 rounded-md">Back to login</Link>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
})
const mapDispatchToProps = {
    addUser : addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)