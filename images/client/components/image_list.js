import React from 'react';
import ImageDetail from './image_detail';

const ImageList = (props) => {
    return (
        <ul className="media-list list-group">
            {props.images
                .filter(image => !image.is_album)
                .map(image => <ImageDetail key={image.title} image={image}/>)}
        </ul>
    );
}



export default ImageList;