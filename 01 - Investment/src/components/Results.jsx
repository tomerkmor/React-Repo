import React from 'react'
import {calculateInvestmentResults, formatter} from '../util/investment.js'

export default function Results({userInput}) {
    console.log(userInput)
    console.log(calculateInvestmentResults(userInput))

    const userData = calculateInvestmentResults(userInput)
    const initialInvestment = 
    userData[0].valueEndOfYear - 
    userData[0].interest - 
    userData[0].annualInvestment

    const tableHeader = 
    <thead>
        <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
    </thead>

    const userContent = 
    <tbody>
        {userData.map((item) => {
            const totalInterest = 
            item.valueEndOfYear - 
            item.annualInvestment * item.year - 
            initialInvestment
            
            const totalAmountInvested = item.valueEndOfYear - totalInterest
            return (
                <tr key={item.year}>
                    <td>{item.year}</td>
                    <td>{formatter.format(item.valueEndOfYear)}</td>
                    <td>{formatter.format(item.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            )
        })}
    </tbody>

  return (
    <table id="result">
        {tableHeader}
        {userContent}
    </table>
  )
}
