import React, { PureComponent } from 'react';
import { PostType } from './PostType';
import { Notes } from './Notes';
import PropTypes from 'prop-types';
import { response } from '../fixture';
import { DateAndShare } from './DateAndShare';
import { Tags } from './Tags';

export class Post extends PureComponent {

    results = this.getPost();

    getPost () {
        return response.find((el) => 
            el.posts.id == this.props.match.params.id
        )
    }

    render() {
        return (
            <div>
                <PostType post={this.results} />
                <Notes number={this.results.posts.note_count} />
                <DateAndShare date={this.results.posts.date} />
                <Tags tags={this.results.posts.tags} />
            </div>
        );
    }
}

Post.propTypes = {
    post: PropTypes.object
};
