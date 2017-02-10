import React from 'react';
import ImageScore from './image_score';

const ImageDetail = (props) => {
    const {image} = props;

    return (
        <li className="media list-group-item">
            <div className="media-left">
                <img src={image.link}/>
            </div>
            <div className="media-body">
                <h4 className="media-heading">
                    {image.title}
                </h4>
                <p>{image.description}</p>
                <ImageScore ups={image.ups} downs={image.downs} />
            </div>
        </li>
    );
}

export default ImageDetail;