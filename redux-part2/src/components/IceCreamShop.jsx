import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamShop = () => {
    const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Number of IcrCream {numOfIceCream}</h1>
            <button onClick={() => dispatch(buyIceCream())}>
                Buy IceCream
            </button>
        </div>
    );
};

export default IceCreamShop;
