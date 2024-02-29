import React from 'react'
import logo from '../assets/logoBMW.webp';
import "./Header.css";
import { useState } from "react";
// import { styled } from 'style-components'

export default function Header() {
	let [cotentTime, setCotentTime] = useState(new Date())
	setInterval(() => setCotentTime(new Date()), 1000);

  return (
    <>
		<header>
			<img src={logo} alt="logo" />
			<h3>BMW 05</h3>

			<span>Время сейчас: { cotentTime.toLocaleTimeString() } ✔</span>
		</header>
    </>
  )
}
