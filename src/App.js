import logo from "./logo.svg";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <Card title="testApp" subtitle="lol this is fetched via props"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
