import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../componentRegistry'

storiesOf('Button', module)
  .add('with basic', () => <Button onClick={action('clicked')}>Click</Button>)
  .add('with alert', () => <Button onClick={()=>alert('alert')}>Pop alert</Button>);
