import React, { useEffect, useState } from "react";

const Count = () => {

    const [count, setCount] = useState(0);

    

    const incrementCount = () => {
        setCount((c)=>c+1);
    }

    useEffect(()=>{
        document.onmousedown(incrementCount);

        return clearInterval();
    }, [count])

    return <div>
        <p>Current Count: {count}</p>
    </div>
}

export default Count;