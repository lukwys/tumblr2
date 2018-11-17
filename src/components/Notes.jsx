import React from 'react';
import PropTypes from 'prop-types';
import '../styles/notes.scss';

export class Notes extends React.PureComponent {
    isValidFormat = () => {
        return typeof this.props.number === 'number';
    }

    setNotesContent = () => {
        if (this.isValidFormat()) {
            return <p className='notes__text'>{this.props.number} notes</p>;
        }
        else {
            return <p className='notes__text'>Invalid format</p>;
        }
    }

    render() {
        return (
            <div className='notes'>
                {this.setNotesContent()}
            </div>
        )
    }
}

Notes.propTypes = {
    number: PropTypes.number
}
