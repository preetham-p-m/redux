import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

const CakeShopWithHook = () => {
    const numOfCake = useSelector((state) => state.cake.numOfCake);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Number of Cake {numOfCake}</h1>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
};

export default CakeShopWithHook;
