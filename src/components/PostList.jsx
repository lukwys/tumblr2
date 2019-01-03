import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { response } from '../fixture';
import { Link } from 'react-router-dom'

import '../styles/postList.scss'

export const PostList = () => {
    return (
        <div>
            <ul className='post-list'>
                {response.map(post => (
                    <Link to={`/Post/${post.posts.id}`} className='post-list__link'>
                        <li className='post-list__item' key={post.posts.id}>
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>{post.posts.title}</CardTitle>
                                    <CardSubtitle>{post.posts.type}</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};