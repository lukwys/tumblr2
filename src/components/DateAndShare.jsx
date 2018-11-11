import React from 'react';
import '../styles/dateAndShare.scss';

export default class DateAndShare extends React.PureComponent {
    render() {
        return (
            <div className='date-and-share'>
                <p className='date-and-share__date'>{this.props.date}</p>
                <div className='date-and-share__share'>
                    <span className='date-and-share__icon date-and-share__icon--like'></span>
                    <span className='date-and-share__icon date-and-share__icon--reload'></span>
                    <span className='date-and-share__icon date-and-share__icon--share'></span>
                </div>
            </div>
        );
    }
}
