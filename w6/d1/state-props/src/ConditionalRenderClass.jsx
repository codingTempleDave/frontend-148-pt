// Copy and Paste this if time is running out
import { Component } from 'react';

class ConditionalRenderClass extends Component {
    constructor(props) {
        super();
        this.state = {
            name: props.initialName,
            isLoggedIn: false
        };

        this.toggleLogin = this.toggleLogin.bind(this);
    }

    toggleLogin() {
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn
        }));
    }

    render() {
        const { name, isLoggedIn } = this.state;

        return (
            <div>
                <p className="greeting">
                    {isLoggedIn ? `Hello, ${name}! Welcome back!` : this.props.customMessage}
                </p>
                {!isLoggedIn ? (
                    <button onClick={this.toggleLogin}>Log In</button>
                ) : (
                    <button onClick={this.toggleLogin}>Log Out</button>
                )}
            </div>
        );
    }
}

export default ConditionalRenderClass;