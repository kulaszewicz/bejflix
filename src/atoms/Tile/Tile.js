import React, { useState } from 'react';
import clsx from 'clsx';
import useTileStyles from './styles';
import TileCover from './TileHover';

const Tile = ({
  variant,
  image,
  alt,
  title,
  description,
  id,
  rating,
  storedRatings,
  setStoredRatings,
  userId,
  className,
}) => {
  const [isTileHoverVisible, setIsTileHoverVisible] = useState(false);

  const classes = useTileStyles({ variant, isTileHoverVisible });

  return (
    <div
      onMouseEnter={() => setIsTileHoverVisible(true)}
      onMouseLeave={() => setIsTileHoverVisible(false)}
      className={clsx(classes.container, className)}
    >
      <img className={classes.img} src={image} alt={alt} />
      {isTileHoverVisible && (
        <TileCover
          title={title}
          description={description}
          rating={rating}
          id={id}
          storedRatings={storedRatings}
          setStoredRatings={setStoredRatings}
          variant={variant}
          userId={userId}
        />
      )}
    </div>
  );
};

Tile.displayName = 'Tile';

export default Tile;
