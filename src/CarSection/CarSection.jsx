import React from 'react'
import WayToTeach from "../WayToTeach"
import { ways } from "../data"

export default function carSection() {
  return (
    <>
      <section>
          <h3>Автомомбили</h3>

          <ul>
            {/* <WayToTeach title={ways[0].title} description={ways[0].description} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} /> */}
            {ways.map((way) => (
              <WayToTeach key={way.title} {...way}/>
            ))}

          </ul>
        </section>
    </>
  )
}