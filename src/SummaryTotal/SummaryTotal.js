import React, { Component } from 'react';


class SummaryTotal extends Component {
    render() {
        const total = Object.keys(this.props.selectedOptions).reduce(
            (acc, curr) => acc + this.props.selectedOptions[curr].cost,
            0);
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {this.props.currencyConst.format(total)}
                </div>      
            </div>
        )
    }
}

export default SummaryTotal;