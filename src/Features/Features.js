import React, { Component } from 'react';
import FeatureItem from '../FeatureItem/FeatureItem'

class Features extends Component {
    render() {
        return (
            Object.keys(this.props.features)
            .map((feature, idx) => {
                return(
                    <fieldset className="feature" key={feature + '-' + idx}>
                        <legend className="feature__name">
                            <h3>{feature}</h3>
                        </legend>
                        <FeatureItem 
                        currencyConst={this.props.currencyConst} 
                        features={this.props.features}
                        featureName={feature}
                        options={this.props.features[feature]}
                        selectedOption={this.props.selectedOptions.selected[feature]}
                        handleUpdate={this.props.handleUpdate}/>
                    </fieldset>
                )
                }           
            )
        )        
    } 
}

export default Features;