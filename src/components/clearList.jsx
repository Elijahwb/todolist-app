import React, { Component } from 'react';

class Clearlist extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <p className="btn-group center-btn">
                <span className="btn btn-danger" onClick={this.props.onClearList}>Clear the all list</span>
                </p>
            </React.Fragment>
         );
    }
} 
export default Clearlist;