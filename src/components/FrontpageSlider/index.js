import React from 'react'
import Link from 'gatsby-link'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";


class FrontpageSlider extends React.Component {

    render() {

        const images = [
            {
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/',
            }
        ]

        return (
            <ImageGallery items={images} showThumbnails={false} />
        );
    }

}

export default FrontpageSlider