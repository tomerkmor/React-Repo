import React from 'react'
import stockImg from '../assets/investment-calculator-logo.png'
export default function Header() {
  return (
    <header id="header">
      <img src={stockImg} alt="stockImg"></img>
      <h1> Investment Calculator</h1>
    </header>
  )
}
