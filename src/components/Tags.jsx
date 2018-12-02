import React from 'react';
import PropTypes from 'prop-types';
import '../styles/tags.scss';

export class Tags extends React.PureComponent {

    get tagsList () {
        return this.props.tags && this.props.tags.length ? 
            <ul className='tags__list'>
                {this.props.tags.map(tag => (
                    <li key={tag} className='tags__list-item'>#{tag}</li>
                ))}
            </ul>
        : null;
    }

    render() {
        return (
            <div className='tags'>
                {this.tagsList}
            </div>
        )
    }
}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string)
}