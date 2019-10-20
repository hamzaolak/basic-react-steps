### basic-react-steps

####Steps for usage

1. install package
`$ npm install basic-react-steps`
1. Usage
```javascript
import { Step, StepList } from 'basic-react-steps'
...
<StepList stepNumber={0}>
		<Step title="title" description="description"/>
		<Step />
		<Step />
		<Step />
</StepList>
...
```


###StepList Component
Props  | Necessity | Type| Description
------------- | -------------
stepNumber | compulsory |number | Select the which child is active...start with 0 .

###Step Component
Props  | Necessity | Type| Description
------------- | -------------
title | optional |String | Step Title
description | optional | String | Step Description

contact: hamzaolak2@gmail.com

