import React from 'react'
import './Steps.css';

import { STATUS_ICON } from './constants'

const Step = ({ status }) => {
    return (
        <div className="step">
            {STATUS_ICON[status]}
            <div className="step-line" style={{ borderTop: status === 'success' && '1px solid #D5E8D4' }} />
        </div>
    )
}

export default Step