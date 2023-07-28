import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App h-full">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
