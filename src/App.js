import "./styles.css";
import { Greet, Greeting } from "./greeting.js";
import { Counter, CounterSimple } from "./counter.js";

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
      <Greet name="Олексій" color="blue" />
      <Greet name="Марія" color="red" />
      <CounterSimple />
      <Counter class="card v-3" bclass="button" bnclass="btn" />
      <Counter class="card v-1" bclass="btn" bnclass="button" />
    </div>
  );
}
