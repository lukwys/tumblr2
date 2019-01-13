import React, { PureComponent } from 'react';
import { PostType } from './PostType';
import { Notes } from './Notes';
import PropTypes from 'prop-types';
import { DateAndShare } from './DateAndShare';
import { Tags } from './Tags';
import { postService } from '../services/post';

import '../styles/post.scss'

export class Post extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        postService.findById(this.props.match.params.id).then(post => {
            this.setState({
                post: post,
            })
        });
    }

    render() {
        return this.state.post ?
            (
                <div>
                    <PostType post={this.state.post} />
                    <Notes number={this.state.post.posts.note_count} />
                    <DateAndShare date={this.state.post.posts.date} />
                    <Tags tags={this.state.post.posts.tags} />
                </div>
            ) :
            (
                <div className='lds-hourglass'></div>
            )
    }

}

Post.propTypes = {
    post: PropTypes.object
};
