import { useState } from "react"
import { Link } from "react-router-dom"
import Homepage from "/homepage"

const About = () => {
    const [ balance , setBalance ] = useState(0)

    const handleClick = () => {
       return <Homepage initialMoney = {balance} />
       
    }
    
    return <>
        <section>
            <h1>About Me</h1>
            <h2>Balance: { balance } </h2>
            <input type="text" 
                   value = {balance} 
                   onChange = { (e) => {setBalance( e.target.value )}} 
            />
            <button onClick = { handleClick }>Enter Money</button><Link to = "/" />
        </section>
    </>
}
export default  About