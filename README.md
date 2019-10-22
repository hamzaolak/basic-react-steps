### basic-react-steps

React steps component.

[![npm](https://img.shields.io/npm/v/basic-react-steps)](https://www.npmjs.com/package/basic-react-steps)
[![GitHub license](https://img.shields.io/github/license/hamzaolak/basic-react-steps)](https://github.com/hamzaolak/basic-react-steps/blob/master/LICENSE)

### Steps for usage

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


### StepList Component

| Props  | Necessity  | Type  | Description  |
| ------------ | ------------ | ------------ | ------------ |
| stepNumber  | compulsory  | number |  Select the which child is active...start with 0. |

### Step Component

| Props  | Necessity  |  Type | Description  |
| ------------ | ------------ | ------------ | ------------ |
| title  |  optional | String  | Step Title  |
| description  | optional  | String  | Step Description  |

### Example
![](https://i.ibb.co/vwCtFmQ/Ekran-Resmi-2019-10-21-22-01-52.png)

contact: hamzaolak2@gmail.com
