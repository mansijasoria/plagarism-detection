import React from 'react'
import { useState } from 'react'
import "./Service.css"

const Services_new = () => {

    const [cards] = useState([
        {
            tital: 'card1',
            text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus obcaecati sequi maiores modi magni a, quisquam vero sunt eius facere iure, vitae maxime soluta aspernatur? Quod cumque laborum alias distinctio?`
        },
        {
            tital: 'card2',
            text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus obcaecati sequi maiores modi magni a, quisquam vero sunt eius facere iure, vitae maxime soluta aspernatur? Quod cumque laborum alias distinctio?`
        },
        {
            tital: 'card2',
            text: `lorem12 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus obcaecati sequi maiores modi magni a, quisquam vero sunt eius facere iure, vitae maxime soluta aspernatur? Quod cumque laborum alias distinctio?`
        },
        {
            tital: 'card2',
            text: `lorem1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus obcaecati sequi maiores modi magni a, quisquam vero sunt eius facere iure, vitae maxime soluta aspernatur? Quod cumque laborum alias distinctio?2`
        },
        {
            tital: 'card2',
            text: `lorem12 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus obcaecati sequi maiores modi magni a, quisquam vero sunt eius facere iure, vitae maxime soluta aspernatur? Quod cumque laborum alias distinctio?`
        },
        {
            tital: 'card2',
            text: `lorem12 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus obcaecati sequi maiores modi magni a, quisquam vero sunt eius facere iure, vitae maxime soluta aspernatur? Quod cumque laborum alias distinctio?`
        },
    ])
    return (
        <div className='box'>
            <section className='section'>
                <div className="containerr">
                    <h1>
                        Services
                    </h1>
                    <div className="cards">
                        {
                            cards.map((card, i) => (
                                <div className="card">
                                    <h3>{card.tital}</h3>
                                    <p>
                                        {card.text}
                                    </p>
                                    <button className='btn'>Explore</button>
                                </div>

                            ))
                        }

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Services_new