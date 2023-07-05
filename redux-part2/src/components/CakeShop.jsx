import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeShop = (props) => {
    return (
        <div>
            <h1>Number of Cakes {props.numOfCake}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        numOfCake: state.cake.numOfCake,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeShop);
