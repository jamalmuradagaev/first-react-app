import React, { useEffect, useState, useCallback } from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import useInput from '../Hooks/useInput'

export default function EffectSection() {
  const input = useInput()
  const [modal, setModal] = useState()
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  // этот код можно записать внутри useEffect   
  const fetchUsers = useCallback(async() => {
    setLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/users') 
    const data = await response.json()
    setUsers(data)
    setLoading(false)
  }, [])

//   async function fetchUsers(){
//     setLoading(true)
//     const response = await fetch('https://jsonplaceholder.typicode.com/users') 
//     const data = await response.json()
//     setUsers(data)
//     setLoading(false)
//   }

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])
  
  return (
    <section>
      <h3>Эффекты</h3>

      <Button onClick={() => setModal(true)} style={{marginBottom: '1rem'}}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Привет из модалки</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique incidunt eveniet aperiam quasi minus totam unde consequatur, temporibus nesciunt ea quo ex. Iste soluta illum reiciendis quibusdam debitis libero dolorem.</p>

        <Button onClick={() => {setModal(false)}}>Закрыть модалку</Button>
      </Modal>

      { loading && <p>Loading...</p> }

      { !loading && 
      <>
        <input type="text" className='control' {...input}/>
        <ul>
          {users
          .filter(user => 
            user.name.toLowerCase().includes(input.value.toLowerCase())
          )
          .map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      </> 
      }
    </section>
  )
}
