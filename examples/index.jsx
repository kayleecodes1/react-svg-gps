import React from 'react';
import { storiesOf } from '@storybook/react';
import BasicLine from './basic/BasicLine';
import BasicTriangle from './basic/BasicTriangle';
import BasicCircle from './basic/BasicCircle';
import DynamicLine from './dynamic/DynamicLine';
import DynamicTriangle from './dynamic/DynamicTriangle';
import DynamicCircle from './dynamic/DynamicCircle';
import InteractiveLine from './interactive/InteractiveLine';
import InteractiveTriangle from './interactive/InteractiveTriangle';
import InteractiveCircle from './interactive/InteractiveCircle';
import InteractiveNodeGraph from './interactive/InteractiveNodeGraph';

storiesOf('Basic', module)
    .add('Line', () => <BasicLine />)
    .add('Triangle', () => <BasicTriangle />)
    .add('Circle', () => <BasicCircle />);

storiesOf('Dynamic', module)
    .add('Line', () => <DynamicLine />)
    .add('Triangle', () => <DynamicTriangle />)
    .add('Circle', () => <DynamicCircle />);

storiesOf('Interactive', module)
    .add('Line', () => <InteractiveLine />)
    .add('Triangle', () => <InteractiveTriangle />)
    .add('Circle', () => <InteractiveCircle />)
    .add('Node Graph', () => <InteractiveNodeGraph />);
