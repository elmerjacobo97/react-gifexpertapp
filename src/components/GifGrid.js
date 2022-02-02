import React from 'react';
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
import Loading from "./Loading";

const GifGrid = ({ category }) => {

    // data:images - alias
    const {data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="heading-category animate__animated animate__fadeIn">Buscando - {category} </h3>

            { loading && <Loading/> }

            <div className="card-grid">
                {
                    images.map(image => (
                        <GifGridItem
                            key={image.id}
                            image={image}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default GifGrid;
