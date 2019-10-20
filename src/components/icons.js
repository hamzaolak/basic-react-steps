import React from 'react'

import { colors } from '../utils/theme.js'

export const Circle = ({
    fill = "transparent",
    color = colors.line,
    r=12
    }) =>{
    const cXY = r+1;
    const heightWidth = cXY * 2;

    return(
        <svg height={heightWidth} width={heightWidth}>
            <circle stroke={color} stroke-width="2" fill={fill}  cx={cXY} cy={cXY} r={r}/>
        </svg>
    )
}

export const Check = ({ color = colors.success, width = 24, height = 24 }) => {
    return(
        <svg width={width} height={height} fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
    )
}