import { useState } from "react";
import { useDispatch } from "react-redux";
import { buyCake } from "../redux";

const BuyNCake = () => {
    const [number, setNumber] = useState();
    const dispatch = useDispatch();
    return (
        <>
            <h1>Number of Cake {}</h1>
            <input type="number" onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => dispatch(buyCake(number))}>
                Buy {number} cakes
            </button>
        </>
    );
};

export default BuyNCake;
