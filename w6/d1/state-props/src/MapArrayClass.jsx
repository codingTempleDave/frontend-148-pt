// copy and paste
import { Component } from 'react';

class MapArrayClass extends Component {
    constructor() {
        super();
        this.state = {
            users: ["Alice", "Bob", "Charlie"],
        };
    }

    render() {
        // creates an users variable and sets
        // it equal to the users key in this.state
        const { users } = this.state;

        return (
            <div>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}> {user} </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default MapArrayClass;
