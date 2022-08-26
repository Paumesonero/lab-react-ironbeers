import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

export default function RandomBeer() {

    const { beerId } = useParams();
    const [beer, setBeer] = useState(null)

    useEffect(() => {
        const getBeer = async () => {
            try {
                const beerFromApi = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
                console.log(beerFromApi)
                setBeer(beerFromApi.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBeer()
    }, [beerId])
    return (
        <div>
            <Navbar />
            {beer && (
                <div>
                    <img src={beer.image_url} alt={beer.name} width='100px' />
                    <div className='beer-atenuationlvl'>
                        <h2>{beer.name}</h2>
                        <p>{beer.attenuation_level}</p>
                    </div>
                    <div className='beer-atenuationlvl'>
                        <h6>{beer.tagline}</h6>
                        <p>{beer.first_brewed}</p>
                    </div>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </div>

            )}
            {!beer && <p>Loading...</p>}
        </div>
    )
}
