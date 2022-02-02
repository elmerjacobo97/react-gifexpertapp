import {useState, useEffect} from 'react';
import {getGifs} from "../helpers/getGifs";

const useFetchGifs = ( category ) => {

    // Estado
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {

                setTimeout(() => {
                    console.log(imgs)
                    setState({
                        data: imgs,
                        loading: false,
                    })
                }, 1500)

            })
    }, [category]);


    // Return
    return state; // { data[], loading: true }

};

export default useFetchGifs;
