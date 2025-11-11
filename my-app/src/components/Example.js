

function Example(props){
    return(
        <div>
            <h2> 
                the value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
            </h2>
            <p>the value of the math prop is:<em>{props.math}</em></p>
            <p>the value of the str prop is:<em>{props.str}</em></p>
        </div>
    );
};
export default Example;