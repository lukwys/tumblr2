import React from 'react';
import { responce } from '../fixture';
import { BrowserRouter, Link } from 'react-router-dom'

import '../styles/postList.scss'

export const PostList = () => {
    return (
        <BrowserRouter>
            <div>
                <ul className='post-list'>
                    {responce.map(post => (
                        <Link to='/Post' className='post-list__link'>
                            <li className='post-list__item'>
                                <div className='post-lost__title'>{post.posts.title}</div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>          
        </BrowserRouter>         
    );
};