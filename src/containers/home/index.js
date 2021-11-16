import React from "react";
import {connect} from 'react-redux'
import { addSubmit, minusSubmit, addTodo, delTodo} from "../../actions";


class Home extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.countData)
    }

    componentDidUpdate(prevProps){
        const {todoData} = this.props

        if(prevProps.todoData.isLoading && !todoData.isLoading){
            console.log("data updated")
        }
    }

    addCount(){
        this.props.addSubmit(2);
    }

    // decCount(){
    //     this.props.minusSubmit(1);
    // }

    addTodo(){
        const inputVal = this._inputValue.value
        if(inputVal !== ''){
            const data ={
                task: inputVal,
                key: Date.now()
            }
            this.props.addTodo(data)
        }
        this._inputValue.value =""
    }

    render(){
        return(
            <div className="flex flex-col items-center justify-center" style={{height:'100vh'}}>
                <h1 className>Count : {this.props.countData}</h1>
                <div>
                    <button onClick={() => this.addCount()} className="rounded-lg border-2 border-black p-2 m-1">Increase</button>
                    <button onClick={() => this.props.minusSubmit(4)} className="rounded-lg border-2 border-black p-2 m-1">Decrease</button>
                </div>
                <div className="mt-5">
                    <div>
                        <input type="text" className="border-black border-b-2 p-2 mr-2" placeholder="What to do?" ref={(a)=> this._inputValue = a}/>
                        {
                            this.props.todoData.isLoading 
                            ? <button className="border-black border-2 p-2 rounded-lg">Loading...</button>
                            : <button className="border-black border-2 p-2 rounded-lg" onClick={() => this.addTodo()}>Submit</button>
                        }
                        <ul>
                        {this.props.todoData.data.map(list => <li className="border-b-2 border-gray-500 m-3 flex flex-row justify-between">{list.task}                    
                        {
                            this.props.removeData.isLoading 
                            ? <button className="text-white bg-red-600 py-1 px-3 rounded-lg" onClick={() => this.props.delTodo(list.key)}>Loading ... </button>
                            : <button className="text-white bg-red-600 py-1 px-3 rounded-lg" onClick={() => this.props.delTodo(list.key)}>Delete </button>
                        }

                        </li>)}
                        </ul>
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    countData: state.count,
    todoData: state.todo,
    removeData: state.remove
})
const mapDispatchToProps = {
    addSubmit: addSubmit,
    minusSubmit : minusSubmit,
    addTodo : addTodo,
    delTodo : delTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home