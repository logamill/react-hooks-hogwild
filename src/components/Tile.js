import React, { useState } from 'react';
import TileDetail from './TileDetail';

function Tile({ data }) {

    return (
        <div>
            <TileDetail data={data} />
        </div>
    )
}

export default Tile;