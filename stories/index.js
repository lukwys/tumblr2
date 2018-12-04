import React from 'react';
import { storiesOf } from '@storybook/react';
import { Notes } from '../src/components/Notes';
import { DateAndShare } from '../src/components/DateAndShare';
import { Tags } from '../src/components/Tags';

storiesOf('Components', module)
    .add("Notes (correct)", () => (
        <Notes number={265} />
    ))
    .add("Notes (wrong format)", () => (
        <Notes number="test" />
    ))
    .add("Notes (empty)", () => (
        <Notes number="" />
    ))
    .add('Date and Share (correct)', () => (
        <DateAndShare date="2011-02-25 20:27:00 GMT"/>
    ))
    .add('Date and Share (wrong format)', () => (
        <DateAndShare date="test"/>
    ))
    .add('Date and Share (empty)', () => (
        <DateAndShare date=""/>
    ))
    .add('Tags (correct)', () => (
        <Tags tags={["tumblrize",
        "milky dog",
        "mini comic"]}/>
    ))
    .add('Tags (empty)', () => (
        <Tags />
    ))
    .add('Tags (wrong type)', () => (
        <Tags tags={[1,2,3]}/>
    ))