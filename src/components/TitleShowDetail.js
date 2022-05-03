import React from 'react';

function TitleShowDetail({ specialty, weight, greased, medal }) {


    return (
    <>
        <p>Specialty: {specialty}</p>
        <p>Weight: {weight} </p>
        {greased === true ? <p>Greased!</p> : <p>Not Greased!</p>}
        <p> Highest Medal Earned: {medal} </p>
    </>
    )
}

export default TitleShowDetail