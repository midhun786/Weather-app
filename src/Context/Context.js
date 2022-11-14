import axios from "axios";
import { createContext, useEffect, useState } from "react";

let UserContext = createContext();


export const CounterDataContext = ({ children }) => {

    const [city, setCity] = useState("medina");
    const [change, setChange] = useState("")

    useEffect(() => {
        LoadData();
    }, [city])

    let LoadData = async () => {
        try {
            let cloud = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e6956817046e31bfbe476ebc1370ef85`)
            console.log(cloud)
            setChange(cloud.data)
        } catch (error) {
            alert("please Enter the Valid City Name")

        }
    }
    return (
        <UserContext.Provider value={{ city, setCity, change }}>
            {children}
        </UserContext.Provider>

    )
}

export default UserContext;