import React, { PureComponent } from 'react';
import { PostPhoto, PostText, PostVideo } from './postRender';

const PostRenderer = {
    photo: PostPhoto,
    text: PostText,
    video: PostVideo,
}

export class PostType extends PureComponent {
    render() {
        const Component = PostRenderer[this.props.posts.type];

        return (
            Component ? <Component {...this.props.post.posts} /> : null
        );
    }
}
