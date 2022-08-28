import React from 'react'
import { Link } from 'react-router-dom'
import beersImg from "../assets/beers.png"
import randomBeerImg from "../assets/random-beer.png"
import newBeerImg from "../assets/new-beer.png"
export default function Home() {
  return (
    <div>
      <div>
        <img src={beersImg} alt="beers background" height="150px" />
        <Link to="/beers"> All Beers</Link>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Facere, fuga repellendus error ullam labore aspernatur hic
          laborum iure culpa, harum blanditiis enim laboriosam tempora
          maiores dignissimos iste optio assumenda necessitatibus.</p>
      </div>

      <div>
        <img src={randomBeerImg} alt="random beer background" height="150px" />
        <Link to="/random">Random Beer</Link>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Facere, fuga repellendus error ullam labore aspernatur hic
          laborum iure culpa, harum blanditiis enim laboriosam tempora
          maiores dignissimos iste optio assumenda necessitatibus.</p>
      </div>

      <div>
        <img src={newBeerImg} alt="new beer background" height="150px" />
        <Link to="/new-beer">New Beer</Link>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Facere, fuga repellendus error ullam labore aspernatur hic
          laborum iure culpa, harum blanditiis enim laboriosam tempora
          maiores dignissimos iste optio assumenda necessitatibus.</p>
      </div>

    </div>
  )
}
