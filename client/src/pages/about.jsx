import { useState } from "react"
import { Link , useHistory } from "react-router-dom"

const About = () => {
    const [ balance , setBalance ] = useState(0)
    const history = useHistory();

    const handleClick = () => {
     history.push("/", { initialMoney: balance });
       
    }
    
    return <>
        <section>
            <h1>About Me</h1>
            <h2>Balance: { balance } </h2>
            <input type="text" 
                   value = {balance} 
                   onChange = { (e) => {setBalance( e.target.value )}} 
            />
            <button onClick = { handleClick }>Enter Money</button><Link to = "/">Go to HomePage</Link>
        </section>
    </>
}
export default  About