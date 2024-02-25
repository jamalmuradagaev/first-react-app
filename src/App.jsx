import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import Button from "./Button/Button.jsx"
import WayToTeach from "./WayToTeach"
import { useState } from "react";
import { ways, differences } from "./data"

export default function App() {
  const [contentType, setContentType] = useState(null)

  
  const handleClick = (type) => {
    setContentType(type)
  }

  return (
    <>
      <Header />

      <main>

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

        <section>
          <h3>Особенности нашей компании</h3>
        </section>

        <section>
          <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Подход</Button>
          <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Доступность</Button>
          <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Концентрация</Button>


          {contentType && <p>{differences[contentType]}</p>}
          {!contentType && <p>Click on button</p>}

        </section>

      </main>


      <Footer />
    </>
  )
}

