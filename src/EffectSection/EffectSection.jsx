import React, { useState } from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'

export default function EffectSection() {
  const [modal, setModal] = useState()

  function openModal(){
    setModal(true)
  }
  return (
    <section>
      <h3>Эффекты</h3>

      <Button onClick={openModal}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Привет из модалки</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique incidunt eveniet aperiam quasi minus totam unde consequatur, temporibus nesciunt ea quo ex. Iste soluta illum reiciendis quibusdam debitis libero dolorem.</p>

        <Button onClick={() => {setModal(false)}}>Закрыть модалку</Button>
      </Modal>
    </section>
  )
}
