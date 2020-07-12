import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {useSelector} from "react-redux";

const Img = (props) => <img src={props.url} alt={props.url}/>;

const Gallery = () => {
    let galleryComponent, images;
    const result = useSelector(state => state.galleryPage.components);

    if (result.length > 0) {
        galleryComponent = result.filter(gridCom => gridCom.type === 'GalleryComponent');

        if (!!galleryComponent[0].metadata.images) {
            images = galleryComponent[0].metadata.images;
        }
    }
    return (
        <Carousel
            dots
            slidesPerPage={3}
            arrows
            clickToChange
            autoPlay={2000}
            animationSpeed={1000}
            infinite
            itemWidth={375}
            offset={-2}
            breakpoints={{
                640: {
                    arrows: false
                },
                900: {
                    arrows: false
                }
            }}
        >
            {
                images && images.length !== 0 && images.map((url, i) => <Img key={url + i} url={url}/>)
            }
        </Carousel>
    );
};

export default Gallery;