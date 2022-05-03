import React, { useState } from 'react';
import TitleShowDetail from './TitleShowDetail';

function TileDetail({ data }) {

    const [isHidden, setIsHidden] = useState(false)
    const [moreInfo, setMoreInfo] = useState(false)

    function handleAddedInfo(e) {
        setMoreInfo((moreInfo) => !moreInfo)

    }

    const hogMap = data.map((hog, index) => {
        return (
            <div key={index} className='ui card'>
                <button id={index} onClick={() => setIsHidden(() => !isHidden)}> Hide This Hog! </button>
                {isHidden === true ? null : 
                <>
                    <h1>{hog.name}</h1>
                    <img src={hog.image} alt={hog.name} /> 
                    <button id={index} onClick={handleAddedInfo}>More Info?</button>
                    {
                    (moreInfo === true) ? 
                    <>
                        <TitleShowDetail id={index} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} medal={hog.[ 'highest medal achieved ']} />
                    </>
                    :
                    null 
                    }
                    </>
                 }
                </div>
                )})

    return (
        <div>
            {hogMap}
        </div>
    )
}

export default TileDetail;