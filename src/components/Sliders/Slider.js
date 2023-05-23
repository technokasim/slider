import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import Lightbox from 'lightbox.js-react';

import { Gallery } from "react-grid-gallery";

import ImageGallery from 'react-image-gallery';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import DztImageGalleryComponent from "reactjs-image-gallery";


const Sliders = () => {
  const images = [900, 800, 700, 600, 500, 900, 800, 700, 600, 500, 900, 800, 700, 600, 500, 900, 800, 700, 600, 500].map((size) => ({
    src: `https://placekitten.com/${size}/${size}`
  }));

   
  const images2 = [
    {
      original: 'https://picsum.photos/id/1024/1000/600/',
      thumbnail: 'https://picsum.photos/id/1024/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1055/1000/600/',
      thumbnail: 'https://picsum.photos/id/1055/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1026/1000/600/',
      thumbnail: 'https://picsum.photos/id/1026/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1067/1000/600/',
      thumbnail: 'https://picsum.photos/id/1067/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1029/1000/600/',
      thumbnail: 'https://picsum.photos/id/1029/250/150/',
    },
  ];


  var data = [
    {
      url:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Kayak",
      thumbUrl:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Cyclist competition",
      thumbUrl:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Surfer in action",
      thumbUrl:
        "https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Surfer in action",
      thumbUrl:
        "https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Surfer in action",
      thumbUrl:
        "https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Surfer in action",
      thumbUrl:
        "https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1423994485548-7c3cf5c99cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80",
      title: "Drops",
      thumbUrl:
        "https://images.unsplash.com/photo-1423994485548-7c3cf5c99cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80"
    },

    {
      url:
        "https://images.unsplash.com/photo-1444465693019-aa0b6392460d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Bird",
      thumbUrl:
        "https://images.unsplash.com/photo-1444465693019-aa0b6392460d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
      title: "Blue river",
      thumbUrl:
        "https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
      title: "Mountains",
      thumbUrl:
        "https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
    }
  ];
  
  

  return (<>

  <h1>react-gallery-carousel</h1>

  <Carousel images={images} style={{ height: 500, width: 800 }} canAutoPlay="true" autoPlayInterval="2000" isAutoPlaying="true"/>


  <br />
  <br />
  <br />

  <h1>react-grid-gallery</h1>

 <Gallery images={images} />


  <br />
  <br />
  <br />

  <h1>react-image-gallery</h1>


 <div className="image-gallery-wrapper">
        <ImageGallery items={images2} />
      </div>


      <DztImageGalleryComponent images={data} />

 
  
  {/* <Lightbox
  images={images}
  renderImageFunc={(idx, image, toggleLightbox, width, height) => {
    return (
      <img
        key={idx}
        src={image.src}
        className='img-circle'
        style={{width: width, height: height}}
        onClick={toggleLightbox.bind(null, idx)} />
    )
  }}/> */}
  
  ;</>
  );
};

export default Sliders;