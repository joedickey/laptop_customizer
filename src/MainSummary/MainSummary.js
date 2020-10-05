import React, { Component } from 'react';
import SummaryOption from '../SummaryOption/SummaryOption';
import SummaryTotal from '../SummaryTotal/SummaryTotal';


class MainSummary extends Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <SummaryOption 
                    currencyConst={this.props.currencyConst} 
                    selectedOptions={this.props.selectedOptions.selected}/>
                <SummaryTotal 
                    currencyConst={this.props.currencyConst} 
                    selectedOptions={this.props.selectedOptions.selected}/>
            </section>
           
        )
    }
}

export default MainSummary;