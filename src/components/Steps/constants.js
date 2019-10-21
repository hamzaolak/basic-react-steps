import React from 'react'

import { Check, Circle } from '../../components/icons'
import { colors } from '../../utils/theme'

export const STATUS_ICON = {
    "success": <Check />,
    "current": <Circle fill={colors.successDark} color={colors.success} r={8}/>,
    "wait": <Circle />
}