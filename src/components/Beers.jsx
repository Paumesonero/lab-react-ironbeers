import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
export default function Beers() {

    const [beers, setBeers] = useState(null)

    useEffect(() => {
        const getBeers = async () => {
            try {
                const beersFromApi = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
                //console.log(beersFromApi)
                setBeers(beersFromApi.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBeers();
    }, [])
    return (
        <div className='beers-container'>
            <Navbar />
            {beers && (beers.map(el => {
                return (
                    <div key={el._id} className='each-beer-container'>
                        <div>
                            <img src={el.image_url} alt={el.name} className='each-beer-img' />
                        </div>
                        <div className='content-beer'>
                            <h3>{el.name}</h3>
                            <p>{el.tagline}</p>
                            <p> <strong>Created by:</strong> {el.contributed_by}</p>
                        </div>
                    </div>
                )
            }))}
            {!beers && <p>Loading...</p>}
        </div>
    )
}
