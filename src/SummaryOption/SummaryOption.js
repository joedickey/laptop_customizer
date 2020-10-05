import React, { Component } from 'react';


class SummaryOption extends Component {
    render() {
        return (
            Object.keys(this.props.selectedOptions).map((feature, idx) => {
                const checkedOption = this.props.selectedOptions[feature];
                
                return (
                    <div className="summary__option" key={feature + '-' + idx}> 
                        <div className="summary__option__label">{feature} </div>
                        <div className="summary__option__value">{checkedOption.name}</div>
                        <div className="summary__option__cost">
                            {this.props.currencyConst.format(checkedOption.cost)}
                        </div>
                    </div>
                )
                }
            )
        )
    }
}

export default SummaryOption;