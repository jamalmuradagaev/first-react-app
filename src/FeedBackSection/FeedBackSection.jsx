import React from 'react'
import {useState} from "react";
import './FeedBackSection.css'
import Button from "../Button/Button.jsx";

export default function FeedBackSection() {
  const [name, setName] = useState('')
  const [reason, setReason] = useState('help')
  const [hasError, setHaserror] = useState(true)

  const handleNameChange = (e) => {
    setName(e.target.value)
    setHaserror(e.target.value.trim().length === 0)
  }

  return (
    <section>
      <h3>Обратная связь</h3>

      <form action="">
        <label htmlFor="name">Имя: </label>
        <input type="text" 
        name="" id="name" 
        className='control' 
        value={name} 
        style={{
          border: hasError ? '1px solid red' : null
        }}
        onChange={handleNameChange}
      />

        <label htmlFor="reason">Причины обращения: </label>
        <select name="reason" id="" className='control' value={reason} onChange={e => setReason(e.target.value)}>
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <pre>
          Name: {name}
          <br />
          Reason: {reason}
        </pre>

        <Button disabled={hasError} >Отправить</Button>
      </form>
    </section>
  )
}
