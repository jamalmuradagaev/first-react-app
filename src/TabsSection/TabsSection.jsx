import React from 'react'
import Button from "../Button/Button.jsx";

export default function TabsSection({active, onChange}) {
  return (
    <section>
      <Button isActive={active === 'main'} onClick={() => onChange('main')}>Главная</Button>
      <Button isActive={active === 'feedback'} onClick={() => onChange('feedback')}>Обратная связь</Button>

      <Button isActive={active === 'effect'} onClick={() => onChange('effect')}>Обратная связь</Button>
    </section>
  )
}
