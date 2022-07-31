import { useState } from "react";

let Timer = () =>{
    let time =new Date().toLocaleTimeString();
    let [stime,setStime]=useState(time);
    let summ =() =>{
        let time =new Date().toLocaleTimeString();
        setStime(time);

    }
    setInterval(() => {
        summ();
    }, 1000);
    return(
        <div>
            <h1 className="A">{stime}</h1>

        </div>
    )
}
export default Timer;