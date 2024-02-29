import React from 'react'

export default function IntroSection() {
  return React.createElement('section', { style: {textAlign: 'center'} }, [
    React.createElement('h1', { className: 'centered', key: 1 }, 'BMW 05'),
    React.createElement('h3', { className: 'centered', key: 2, style: { color: '#666'}}, 'Ваше Воплощение Стиля и Совершенства, где инженерное искусство и автомобильная страсть воплощаются в каждой модели')
  ])
}
