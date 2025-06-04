import "./styles/style.css";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";


export default function App() {
  return <div className="main">
    <h1 className="heading">Assignment-1 Counter Application</h1>
    <div className="items-container">
      <Counter1 />
      <Counter2 />
    </div>
  </div>;
}
