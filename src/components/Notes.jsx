import React, { Component } from 'react';
import '../styles/notes.scss';

class Notes extends Component {
    render() {
        return (
            <div className='notes'>
                <p className='notes__text'>{this.props.number} notes</p>
            </div>
        );
    }
}

export default Notes;