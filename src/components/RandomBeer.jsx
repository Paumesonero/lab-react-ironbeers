import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export default function RandomBeer() {
    const [random, setRandom] = useState(null)

    useEffect(() => {
        const getBeer = async () => {
            try {
                const beerFromApi = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
                console.log(beerFromApi)
                setRandom(beerFromApi.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBeer()
    }, [])
    return (
        <div>
            <Navbar />
            {random && (
                <div>
                    <img src={random.image_url} alt={random.name} width='100px' />
                    <h3>{random.name}</h3>
                    <p>{random.tagline}</p>
                    <p>{random.first_brewed}</p>
                    <p>{random.attenuation_level}</p>
                    <p>{random.description}</p>
                    <p>Contributed by: {random.contributed_by}</p>
                </div>

            )}
        </div>
    )
}
