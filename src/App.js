import "./App.css";
import Header from "./Components/Header";
import Messages from "./Components/Messages";
import ChatsBlock from "./Components/ChatsBlock";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <ChatsBlock />
        <Messages />
      </div>
    </div>
  );
}

export default App;
