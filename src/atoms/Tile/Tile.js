import React, { useState } from 'react';
import useTileStyles from './styles';
import TileCover from './TileHover';

const Tile = ({ variant, image, alt, title, description }) => {
  const [isTileHoverVisible, setIsTileHoverVisible] = useState(false);

  const classes = useTileStyles({ variant, isTileHoverVisible });

  return (
    <div
      onMouseEnter={() => setIsTileHoverVisible(true)}
      onMouseLeave={() => setIsTileHoverVisible(false)}
      className={classes.container}
    >
      <img className={classes.img} src={image} alt={alt} />
      {isTileHoverVisible && (
        <TileCover title={title} description={description} variant={variant} />
      )}
    </div>
  );
};

Tile.displayName = 'Tile';

export default Tile;
