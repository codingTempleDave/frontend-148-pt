import PropDrillingGrandchild from "./PropDrillingGrandchild";

const PropDrillingChild = (props) => {

    return (
        <>
            <PropDrillingGrandchild someData={props.someData} />
        </>
    );
};

export default PropDrillingChild;