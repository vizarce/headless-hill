import "./styles.css";
import Greeting from "./Greeting.js";
import Counter from "./counter.js";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Greeting
        class="s-card"
        name="Vitaliy and Iryrna Zhakun"
        location="center of the Paris"
      />
      <Counter class="card v-3" bclass="btn" btext="Increase" />
    </div>
  );
}
