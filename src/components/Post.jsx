import React, { PureComponent } from 'react';
import { PostPhoto, PostText, PostVideo } from './postRender';

const PostRenderer = {
    photo: PostPhoto,
    text: PostText,
    video: PostVideo,
}

export class Post extends PureComponent {
    render() {
        const Component = PostRenderer[this.props.post.posts.type];

        return (
            Component ? <Component {...this.props.post.posts} /> : null
        );
    }
}
