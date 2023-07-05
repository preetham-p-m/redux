import { Provider } from "react-redux";
import "./App.css";
import CakeShop from "./components/CakeShop";
import { store } from "./redux/store";
import CakeShopWithHook from "./components/CakeShopWithHook";
import IceCreamShop from "./components/IceCreamShop";
import BuyNCake from "./components/BuyNCake";
import User from "./components/User";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <User />
                <BuyNCake />
                <IceCreamShop />
                <CakeShopWithHook />
                <CakeShop />
            </div>
        </Provider>
    );
}

export default App;
