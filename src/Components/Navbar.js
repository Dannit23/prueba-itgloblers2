import React, { useEffect, useState } from 'react'
import styles from "./Navbar.module.css";

function Navbar({setDataAirline}) {
   
    const useSelect = () => {
        const [data, setData] = useState([])

        useEffect(()=>{
            fetch("json/data.json")
            .then(response => response.json())
            .then(datos => {
                setData(datos)
            })
        }, [])

        console.log(data)
        return data 
    }

    const data = useSelect()
      
    return (
        <nav id={styles.navbar}>
            <div className={styles.containerNav}>
                <a href='#Home'>
                    <img className={styles.logo} src='https://i.imgur.com/1BPd9dP.png' alt='Logo'></img>
                </a>
            </div>
            <div class={styles.navMenuItem}>
                <ul className={styles.navMenu}>
                    <li>
                        <a href='#Home' className={styles.navItem}>Inicio</a>
                    </li>
                    <li>
                        <select id={styles.airlines} onChange={e=>setDataAirline(e.target.value)}> 
                            <option>Aerolineas</option>
                            {data.map((item, index) => (
                                <option key={index} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </li>
                </ul>
            </div>   
        </nav>

    );
}

export default Navbar