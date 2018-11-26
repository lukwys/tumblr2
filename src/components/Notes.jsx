import React from 'react';
import PropTypes from 'prop-types';
import '../styles/notes.scss';

export class Notes extends React.PureComponent {
    isValidFormat = () => {
        return typeof this.props.number === 'number';
    }

    get NotesContent () {
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
                {this.NotesContent}
            </div>
        )
    }
}

Notes.propTypes = {
    number: PropTypes.number
}
