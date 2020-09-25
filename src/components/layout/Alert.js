import React, { Component } from 'react'

export class Alert extends Component {
    render() {
        return (
            <div>
                { this.props.alert && <div className={`alert alert-danger`} >
                 <i className="fas fa-info-circle"/> {'Please enter something'}
                </div>}
            </div>
        )
    }
}

export default Alert

