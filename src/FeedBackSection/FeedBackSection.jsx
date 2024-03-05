import React from 'react'
import {useState} from "react";
import './FeedBackSection.css'
import Button from "../Button/Button.jsx";

export default function FeedBackSection() {
  const [form, setForm] = useState({
    name: '',
    hasError: true,
    reason: 'help'
  })
  // const [name, setName] = useState('')
  // const [reason, setReason] = useState('help')
  // const [hasError, setHaserror] = useState(true)

  const handleNameChange = (e) => {
    // setName(e.target.value)
    // setHaserror(e.target.value.trim().length === 0)
    setForm(prev => ({
      ...prev, 
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,}))
    // setForm({
    //   name: event.target.value,
    //   hasError: event.target.value.trim().length === 0,
    //   reason: form.reason
    // })
  }

  // const ToggleError = () => {
  //   setHasError((prev) => !prev)
  // }

  return (
    <section>
      <h3>Обратная связь</h3>

      {/* <Button onClick={ToggleError}>Убрать ошибку</Button> */}

      <form action="">
        <label htmlFor="name">Имя: </label>
        <input type="text" 
        name="" id="name" 
        className='control' 
        value={form.name} 
        style={{
          border: form.hasError ? '1px solid red' : null
        }}
        onChange={handleNameChange}
      />

        <label htmlFor="reason">Причины обращения: </label>
        <select 
        name="reason"
        id="" 
        className='control' 
        value={form.reason} 
        // onChange={e => setReason(e.target.value)}
        onChange={(event) => setForm((prev) => ({...prev, reason: event.target.value}))}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <pre>
          {/* Name: {form.name}
          <br />
          Reason: {form.reason} */}
          {JSON.stringify(form, null, 2)}
        </pre>

        <Button disabled={form.hasError} >Отправить</Button>
      </form>
    </section>
  )
}
