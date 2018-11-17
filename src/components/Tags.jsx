import React from 'react';
import PropTypes from 'prop-types';
import '../styles/tags.scss';

export class Tags extends React.PureComponent {

    render() {
         return this.props.tags ? 
         <div className='tags'>
            <ul className='tags__list'>
                {this.props.tags.map(tag => (
                    <li key={tag} className='tags__list-item'>#{tag}</li>
                ))}
            </ul>
        </div>
        : null;
    }
}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string)
}