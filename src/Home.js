import React, {Component} from 'react'
export default class Home extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.name.data}</h2>
                <h2>{this.props.address.data}</h2>
            </div>
        )
    }
}