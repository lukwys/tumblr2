import React, { PureComponent } from 'react';

import '../../styles/postVideo.scss'

export class PostVideo extends PureComponent {
    render() {
        return (
            <div className='video-post' dangerouslySetInnerHTML={{__html: this.props.player[0].embed_code}} />
        );
    }
}
