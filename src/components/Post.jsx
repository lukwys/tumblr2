import React, { PureComponent } from 'react';
import { PostType } from './PostType';
import { Notes } from './Notes';
import PropTypes from 'prop-types';
import { DateAndShare } from './DateAndShare';
import { Tags } from './Tags';
import { postService } from '../services/post';
import { Store } from '../Store';
import { decorate, observable, action } from 'mobx';
import {observer} from "mobx-react"

import '../styles/post.scss'

const postStore = new Store();

decorate(Store, {
    post: observable,
    getPost: action,
  });

 
export @observer class Post extends PureComponent {

    componentDidMount() {
        postStore.getPost(this.props.match.params.id);
    }

    render() {
        return postStore.post ?
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

}

Post.propTypes = {
    post: PropTypes.object
};
