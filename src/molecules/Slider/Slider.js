import React from 'react';
import Carousel from 'react-multi-carousel';
import Tile from '../../atoms/Tile/Tile';
import useSliderStyles from './styles';

const Slider = ({ variant, movies, storedRatings, setStoredRatings }) => {
  const classes = useSliderStyles();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: variant === 'sm' ? 4 : 2,
      slidesToSlide: variant === 'sm' ? 4 : 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className={classes.container}>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={false}
        autoPlay={false}
        keyBoardControl={false}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        deviceType={'desktop'}
        itemClass="carousel-item-bejflix"
      >
        {movies.map(({ poster, Title, description, id }, index) => {
          return (
            <Tile
              key={index}
              variant={variant}
              id={id}
              image={poster}
              rating={storedRatings.filter((rate) => rate.id === id)}
              title={Title}
              description={description}
              setStoredRatings={setStoredRatings}
              storedRatings={storedRatings}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

Slider.displayName = 'Slider';

export default Slider;
