import { useState } from "react"
import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValue = userInput.duration > 0

  const handleChange = (identifier, amount) => {
    setUserInput(prevState => {
        return {
          ...prevState,
          [identifier]: +amount
        }
    })
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {inputIsValue ? <Results userInput={userInput}/> : <p class="center">Please enter a duration greater than 0. </p>}
    </>
  )
}

export default App
