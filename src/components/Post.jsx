import React from 'react';
import { PostType } from './PostType';
import { Notes } from './Notes';
import PropTypes from 'prop-types';
import { DateAndShare } from './DateAndShare';
import { Tags } from './Tags';
import { observer, inject } from "mobx-react"

import '../styles/post.scss'

export const Post = inject("postStore")(observer(class Post extends React.Component {

    componentDidMount() {
        this.props.postStore.getPost(this.props.match.params.id);
    }

    render() {
        const { postStore } = this.props
        return postStore.post.posts ?
            (
                <div>
                    <PostType post={postStore.post} />
                    <Notes number={postStore.post.posts.note_count} />
                    <DateAndShare date={postStore.post.posts.date} />
                    <Tags tags={postStore.post.posts.tags} />
                </div>
            ) :
            (
                <div className='lds-hourglass'></div>
            )
    }

}));

Post.propTypes = {
    post: PropTypes.object
};
