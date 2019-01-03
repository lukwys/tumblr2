import React, { PureComponent } from 'react';
import { PostType } from './PostType'
import PropTypes from 'prop-types';
import { response } from '../fixture';

let dupa;

export class Post extends PureComponent {

    getPost () {
        response.find((el) => {
            return el.posts.id == this.props.match.params.id;
        })
    }

    render() {
        return (
            <div>
                <PostType post={this.getPost()}/> 
                <div className='post'>
                    <h1>{this.props.match.params.id}</h1>
                </div>
            </div>
        );
    }
}

Post.propTypes = {

};
