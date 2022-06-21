import axios from 'axios'
import React, {useState , useEffect} from 'react'
import "./App.css"

const App = () => {
    const [advice, setAdvice] = useState("")

        useEffect(()=>{
            fetcheAdvice()
        },[])
        
        const fetcheAdvice = () =>{
            axios.get("https://api.adviceslip.com/advice")
            .then((response)=>{
                const {advice} = response.data.slip
                setAdvice(advice)
            })
            .catch((error)=>{
             console.log(error)
            })
            
        }
  return (
    <div className='advice__container'>
        <div className='advice__container-app'>
            <h1 className='advice__container-heading'>{advice}</h1>
            <button className='advice__container-btn vibrate-1' onClick={fetcheAdvice}>
                GIVE YOU ADVICE!
            </button>
        </div>
    </div>
  )
}

export default App