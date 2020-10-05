import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

class FeatureItem extends Component {
    render() {
        return (
            this.props.options.map(item => {
                
                return(
                    <div key={slugify(JSON.stringify(item))} className="feature__item">
                    <input
                    type="radio"
                    id={slugify(JSON.stringify(item))}
                    className="feature__option"
                    name={item.name}
                    checked={item.name === this.props.selectedOption.name}
                    onChange={e => this.props.handleUpdate(this.props.featureName, item)}
                    />
                    <label htmlFor={slugify(JSON.stringify(item))} className="feature__label"> 
                    {item.name} ({this.props.currencyConst.format(item.cost)})
                    </label>
              </div>
                )

            }
            )

        )
    }
}

export default FeatureItem;