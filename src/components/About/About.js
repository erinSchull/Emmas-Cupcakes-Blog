import React, { Component } from 'react';


class About extends Component{
    constructor(){
        super();

        this.state = {
            about: '',
            title: ''
        }
    }

    handleAboutChange(e){
        this.setState({about: e.target.value})
    }

    

    render(){
        return(
            <div>
                <input></input>
               <input value = {this.state.about} onClick={(e) => this.handleAboutChange}></input>
            </div>
        )
    }
}

export default About;