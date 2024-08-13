import { useState } from 'react';

const FunctionCompProps = (props) => {
    const [name, setName] = useState(props.initialName);
    const [defaultName, setDefaultName] = useState(props.defaultName);

    const changeName = () => {
        setName('Tarzan');
    };

    return (
        <div>
            <p>Welcome, {name} and {defaultName} to the world of React!</p>
            <button onClick={changeName}>Change Name</button>
        </div>
    );
};

FunctionCompProps.defaultProps = {
    defaultName: "Fred George",
}

export default FunctionCompProps;
