import React, { Component } from 'react';

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['•HTML','•CSS','•JS','•REACT JS','•SQL SERVER','•C#','•REACT NATIVE']
        };
    }

    render() {
        return (
            <div className="condiv skills" id='Skills'>
            <h1 className="subtopic">My Skills</h1>
            <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills
    