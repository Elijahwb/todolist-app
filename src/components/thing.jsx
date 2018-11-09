import React, { Component } from 'react';


class Thing extends Component {
    
    state = {
        status:this.props.statusThing,
        classes:this.props.classesThing,
        divClasses:this.props.divClassesThing
    }
    handleFinish =()=>{
        if(this.state.status==="Awaiting.."){
            this.setState({status:"Finished"});
            this.props.handleFinish();
            const classes = "btn mybtn-primary";
            this.setState({classes});
            this.setState({divClasses:"d-block items my-width ml-4 mt-2 mybg-white"});
        }else{
            this.setState({status:"Awaiting.."});
            this.props.handleAwaiting();
            this.setState({classes:"btn p-2"});
            this.setState({divClasses:"d-block items my-width ml-4 mt-2 mybg-primary"});
        }

    }
    componentDidMount(){
        
    }
    render() { 
        
        return ( 
            <div id="item-item" className={this.state.divClasses}>
                <p className="lead">
                <span className={this.state.classes} onClick={this.handleFinish}>{this.state.status}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &nbsp;{this.props.thing}
                </p>
                <span className="btn btn-danger btn-sm p2" onClick={this.props.onClearItem}>Clear item</span>
            </div>
        );
    }
}

export default Thing;