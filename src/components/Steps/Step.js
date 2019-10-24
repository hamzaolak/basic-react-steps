import React from 'react'
import './Step.css';

import { STATUS_ICON } from './constants'
import { colors } from '../../utils/theme';

const Step = ({ status, title, description, icon, ...rest }) => {
    return (
        <div {...rest} className="step">
            <div className="info">
                <div className="icon">{icon ? icon : STATUS_ICON[status]}</div>
                {title && <div className="title" style={{ color: colors.codGray }}>{title}</div>}
                {description && <div className="description" style={{ color: colors.tundora }}>{description}</div>}
            </div>
            <div className="step-line"
                style={{ borderTop: status === 'finish' ? '1px solid ' + colors.success : "1px solid " + colors.line }} />
        </div>
    )
}

export default Step