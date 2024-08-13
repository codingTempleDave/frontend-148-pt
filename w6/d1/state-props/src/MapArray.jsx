import { useState } from 'react'

const MapArray = () => {
    const [users, setUsers] = useState(["Alice", "Bob", "Charlie", "John"])

    return (
        <div>
            <ul>
                {users.map((user, index) =>
                    <li key={index}> {user} </li>
                )}
            </ul>
        </div>
    );
}

export default MapArray;