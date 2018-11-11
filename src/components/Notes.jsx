import React from 'react';
import '../styles/notes.scss';

export default class Notes extends React.PureComponent {
    render() {
        return (
            <div className='notes'>
                <p className='notes__text'>{this.props.number} notes</p>
            </div>
        );
    }
}
