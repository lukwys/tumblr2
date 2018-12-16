import React, { PureComponent } from 'react';

import '../../styles/postPhoto.scss'

export class PostPhoto extends PureComponent {

    get photos () {
        return this.props.photos.map((photo) => (
            <img className='photo-post__image' src={photo.alt_sizes[0].url} />
        ));
    }

    render() {
        return  (
            <div className='photo-post'>
                {this.photos}
            </div>
        );
    }
}
