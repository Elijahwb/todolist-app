import React, { Component } from 'react';
import Thing from './thing';
import Clearlist from './clearList';
//import Input from './input';
//var states = this.state.things.length -1;
class Things extends Component {
    state ={
        things:[],
        finishedThings:[],
        status:"No items in the list so far!",
        classes:"center-items",
        idNumber:1,
        awaitingThings:undefined,
        counter:1,
        statusThing:"Awaiting..",
        classesThing:"btn p-2",
        divClassesThing:"d-block items my-width ml-4 mt-2 mybg-primary"
    }
    
    hundleFinished = thingId =>{
        console.log("handle finish has been called from itemId: "+thingId);
        //var finished = this.state.things.filter(thing=>thing.id==thingId);
        //var finishedThings = this.state.finishedThings.concat(finished);

        console.log("Length of the array containing finished items:"+this.state.counter);
        var counter = this.state.counter + 1;
        this.setState({counter});
        var awaitingThings = this.state.things.length - counter;
        this.setState({awaitingThings});
        console.log("Length of the array containing awaiting items:"+this.state.awaitingThings);
    }
    handleAwaiting =(itemId)=>{
        console.log("handle awaiting has been activated from itemId:" + itemId);
        //var awaitingThings = this.state.things.length - this.state.counter;
        //this.setState({awaitingThings});
        var counter = this.state.counter;
        counter--;
        this.setState({counter});
        console.log("Length of the array containing finished items:"+counter);
    }
    
    handleAddItems =(event)=>{
        //var idNumber = 1;
        event.preventDefault();
        let activity = this.refs.item.value;
        console.log(activity+" is the item entered.");
        const things = this.state.things.concat({id:"T0"+this.state.idNumber,activity});
        this.setState({things});
        this.refs.item.value='';
        this.handleIdIncrement();
        console.log(this.state.idNumber);
        //idNumber++;
        this.state.things.filter(t=>console.log(t.id));
    }
    handleIdIncrement = ()=>{
        var idNumber = this.state.idNumber + 1;
        this.setState({idNumber});
    }
    handleClearItem = itemId =>{
        const things = this.state.things.filter(itm => itm.id !== itemId);
        this.setState({things});
    }
    handleClearList = ()=>{
        const things = this.state.things.filter(itm2 => itm2.id === null);
        this.setState({things});
    }
    handleChange =(e)=>{
        e.preventDefault();
        let firstvalue = this.refs.item.value;
        setInterval(()=>{
            let newValue =this.refs.item.value;
            if(newValue!==firstvalue){
                //this.setState({status:"you are entering an item"})
            }
        },300);
    }
    processClassNames =()=>{
        if(this.state.things.length >=8){
            this.setState({classes:"center-items bg-warning"})
        }else{
            this.setState({classes:"center-items"})
        }
    }
    
    //let realHeight = document.getElementById("all-items").offsetHeight; 
    render() { 
    

        return (
            <React.Fragment>
            <div className="main-container">
                    <div className="center-items" id="all-items" ref="container">
                    {this.state.things.map(t =><Thing  key={t.id} onClearItem={()                   =>this.handleClearItem(t.id)} itemId={t.id} thing={t.activity} 
                    statusThing={this.state.statusThing} classesThing={this.state.classesThing}
                    divClassesThing={this.state.divClassesThing} handleFinish={()=>this.hundleFinished(t.id)} handleAwaiting={()=>this.handleAwaiting(t.id)}
                    />)}
                    </div>
                {this.state.things[0]===undefined?<p id="big-display">{this.state.status}</p>:<Clearlist onClearList={this.handleClearList} onDisplayList={this.handleDisplayList}/>}
                <h3 id="leader">My Todo list for the weekend!</h3>
                <form id="leader-two" onSubmit={this.handleAddItems}>
                            <input onChange={this.handleChange} id="input-one" ref="item" type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Todo Item"/>
                    </form>
                <p id="item-no">{this.state.things[0]===undefined?null:<b>Number of items in the list: {this.state.things.length}</b>}</p>
            </div>
            </React.Fragment>
         );
    }
}
 
export default Things;