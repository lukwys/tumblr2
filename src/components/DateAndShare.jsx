import React from 'react';
import { format } from 'date-fns';
import '../styles/dateAndShare.scss';

export class DateAndShare extends React.PureComponent {
    render() {
        const postDate = format(this.props.date, 'DD MMMM YYYY');

        return (
            <div className='date-and-share'>
                <p className='date-and-share__date'>{postDate}</p>
                <div className='date-and-share__share'>
                    <span className='date-and-share__icon date-and-share__icon--like'></span>
                    <span className='date-and-share__icon date-and-share__icon--reload'></span>
                    <span className='date-and-share__icon date-and-share__icon--share'></span>
                </div>
            </div>
        );
    }
}
