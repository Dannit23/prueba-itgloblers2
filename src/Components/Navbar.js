import React, { useEffect, useState } from 'react'

function Navbar() {
   
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
        
            <div>
                <ul>
                    <li><a href='#'>Inicio</a></li>
                    <li>
                        <select> 
                            {data.map((item, index) => (
                            <option key={index} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </li>
    
                </ul>
            </div>
        

    );
}

export default Navbar