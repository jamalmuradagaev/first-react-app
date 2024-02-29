import Button from "../Button/Button.jsx"
import React from 'react'
import { useState } from "react";
import { differences } from "../data.js"

export default function DifferencesSection() {
	const [contentType, setContentType] = useState(null)


	const handleClick = (type) => {
		setContentType(type)
	}
	return (
		<section>
			<h3>Особенности нашей компании</h3>

			<Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Подход</Button>
			<Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Доступность</Button>
			<Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Концентрация</Button>


			{contentType && <p>{differences[contentType]}</p>}
			{!contentType && <p>Click on button</p>}

		</section>
	)
}
