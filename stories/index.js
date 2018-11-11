import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Notes from '../src/components/Notes';
import DateAndShare from '../src/components/DateAndShare';

storiesOf('Button', module)
    .add('with text', () => (
        <Button onClick={action('clicked')}>Hello Button</Button>
    ))
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    ));
    
storiesOf('Components', module)
    .add("Notes", () => (
        <Notes number="265" />
    ))
    .add('Date and Share', () => (
        <DateAndShare date="11 November, 2018"/>
    ));
