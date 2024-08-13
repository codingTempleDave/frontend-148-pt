import { useState } from 'react'

const ConditionalRender = (props) => {
    const [name, setName] = useState(props.initialName);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <p>
                { isLoggedIn ? `Hello ${name} what's up?` : props.customMessage }
            </p>

            {!isLoggedIn ? (
                <button onClick={handleLoginClick}>Log In</button>
            ) : (
                <button onClick={handleLogoutClick}>Log Out</button>
            )}
        </div>
    )
}

export default ConditionalRender;