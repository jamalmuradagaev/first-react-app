import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import Button from "./Button/Button.jsx"
import WayToTeach from "./WayToTeach"
import { useState } from "react";
import { ways, differences } from "./data"

export default function App() {
  const [content, setContent] = useState('Нажми на кнопку')

  
  const handleClick = (type) => {
    setContent(type)
  }

  return (
    <>
      <Header />

      <main>

        <section>
          <h3>Автомомбили</h3>

          <ul>
            <WayToTeach title={ways[0].title} description={ways[0].description} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
          </ul>
        </section>

        <section>
          <h3>Особенности нашей компании</h3>
        </section>

      </main>

      <Button onClickParam={() => handleClick('way')}>Подход</Button>
      <Button onClickParam={() => handleClick('easy')}>Доступность</Button>
      <Button onClickParam={() => handleClick('program')}>Концентрация</Button>

      <p>{differences[content]}</p>

      <Footer />
    </>
  )
}

