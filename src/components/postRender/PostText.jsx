import React, { PureComponent } from 'react';

import '../../styles/postText.scss'

export class PostText extends PureComponent {
    render() {
        return (
            <div className='text-post' dangerouslySetInnerHTML={{__html: this.props.body}} />
        );
    }
}
