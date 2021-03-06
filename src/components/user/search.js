import React, { Component } from 'react'

export class search extends Component {

    state={
        text:''
    };
    onSubmit = e => {
        e.preventDefault();
      
            this.props.searchUsers(this.state.text)
            this.setState({text:''})
            
        
        
        
     };
    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onClick = () =>{
        this.props.clearusers()
    }
 

    render() {
        return (
            <div>
               
                <form  onSubmit={this.onSubmit} className='form'>
                    <input type='text' name='text' placeholder='Search User' value={this.state.text} onChange={this.onChange}/>
                    <input type='submit' value='Search' className='btn btn-dark btn-block'/>
                </form>
                {this.props.clearbutton && <button className='btn btn-dark btn-block' onClick={this.props.clearusers}>Clear</button>}
                
            </div>
        )
    }
}

export default search

