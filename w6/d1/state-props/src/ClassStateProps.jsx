import { Component } from "react";

class ClassStateProps extends Component {
    constructor(props) {
        super(); // calls class we are inheriting from

        // special Component property
        this.state = {
            name: props.initialName,
        }

        // binding this to the object instance
        // ie the thing that is created in the constructor
        // the property    binding the function to the constructor
        this.changeName = this.changeName.bind(this);
    }

    changeName() {
        this.setState({ name: "King Arthur"});
    }

    render() {
        const name = this.state.name;

        return(
            <div>
                <p>Hello {name} from a class based greeting!</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

// default values for the props
// just in case initialName is empty/undefined
ClassStateProps.defaultProps = {
    initialName: "Default Name"
}


export default ClassStateProps;