import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NewBeer() {
    const navigate = useNavigate()
    const [beer, setBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewer_tips: '',
        attenuation_level: '',
        contributed_by: ''
    })

    const handleChange = (e) => {
        const conditionalValue = e.target.name === 'attenuation_level' ? parseInt(e.target.value) : e.target.value;
        console.log(conditionalValue)
        setBeer(prev => {
            return {
                ...prev,
                [e.target.name]: conditionalValue
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beer)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navbar />
            <h2>Add a new beer!</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' value={beer.name} placeholder='name' onChange={handleChange} />
                <input type='text' name='tagline' value={beer.tagline} placeholder='tagline' onChange={handleChange} />
                <input type='text' name='description' value={beer.description} placeholder='description' onChange={handleChange} />
                <input type='text' name='first_brewed' value={beer.first_brewed} placeholder='first brewed' onChange={handleChange} />
                <input type='text' name='brewer_tips' value={beer.brewer_tips} placeholder='tips' onChange={handleChange} />
                <input type='number' name='attenuation_level' value={beer.attenuation_level} placeholder='attenuation level' onChange={handleChange} />
                <input type='text' name='contributed_by' value={beer.contributed_by} placeholder='contributed by' onChange={handleChange} />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}
