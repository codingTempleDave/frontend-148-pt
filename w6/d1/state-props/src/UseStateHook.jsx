import { useState } from 'react'

const UseStateHook = () => {
    // state variable is name | setName is the state function
    const [name, setName] = useState("Spiderman");
    const [change, setChange] = useState(true);

    const changeName = () => {
        // if(change) {
        //     setName("Venom");
        //     setChange(false);
        // }
        // else {
        //     setName("Doctor Octopus");
        //     setChange(true);
        // }

        // Ternary operator method
        // if change is true do whats to the left of the :
        // if change is false do whats to the right of the :
        change ? setName("Venom") : setName("Doctor Octopus");
        setChange(!change);
    }

    return (
        <div>
            <p>Why hello {name}, this is a function component using useState</p>
            <button onClick={changeName}>Change Name</button>
        </div>
    )
}

export default UseStateHook;