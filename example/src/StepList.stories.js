import React from 'react';
import { storiesOf } from '@storybook/react';
import { SimpleUsage, TitleAndDescription, Icon } from './StepList';

export const stories = storiesOf('StepList Component', module)
stories.add('Simple Usage', () => <SimpleUsage />)
stories.add('with Title And Description', () => <TitleAndDescription />)
stories.add('with Icon', () => <Icon />)

