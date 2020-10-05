import React, { Component } from 'react';
import Features from '../Features/Features'


class MainForm extends Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Features 
                    currencyConst={this.props.currencyConst} 
                    features={this.props.features}
                    selectedOptions={this.props.selectedOptions}
                    handleUpdate={this.props.handleUpdate}/>
            </form>
        )
    }
}

export default MainForm;