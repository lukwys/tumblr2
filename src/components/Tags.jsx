import React from 'react';
import PropTypes from 'prop-types';
import '../styles/tags.scss';

export class Tags extends React.PureComponent {

    get TagsList () {
        return this.props.tags && this.props.tags.length ? 
         <div className='tags'>
            <ul className='tags__list'>
                {this.props.tags.map(tag => (
                    <li key={tag} className='tags__list-item'>#{tag}</li>
                ))}
            </ul>
        </div>
        : null;
    }

    render() {
        return this.TagsList
    }
}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string)
}