import React from 'react';
import { format } from 'date-fns';
import { isValid } from 'date-fns/is_valid';
import PropTypes from 'prop-types';
import '../styles/dateAndShare.scss';

export class DateAndShare extends React.PureComponent {
    get postDate () {
        return format(this.props.date, 'DD MMMM YYYY');
    }

    static isValidFormat = () => {
        return isValid(this.props.data);
    }

    get postDateContent () {
        if (DateAndShare.isValidFormat) {
            return <p className='date-and-share__date'>{this.postDate}</p>
        }
        else {
            return <p className='date-and-share__date'>Invalid date</p>
        }
    }

    render() {
        return (
            <div className='date-and-share'>
                {this.postDateContent}
                <div className='date-and-share__share'>
                    <span className='date-and-share__icon date-and-share__icon--like'></span>
                    <span className='date-and-share__icon date-and-share__icon--reload'></span>
                    <span className='date-and-share__icon date-and-share__icon--share'></span>
                </div>
            </div>
        );
    }
}

DateAndShare.propTypes = {
    date: PropTypes.string
}