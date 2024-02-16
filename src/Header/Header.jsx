import React from 'react'
import logo from '../assets/logoBMW.webp';
import "./Header.css";

export default function Header() {
	const now = new Date();
  return (
    <>
		<header>
			<img src={logo} alt="logo" />
			<h3>BMW RestRU</h3>

			<span>Время сейчас: { now.toLocaleTimeString() }</span>
		</header>
    </>
  )
}
