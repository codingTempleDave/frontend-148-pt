import './App.css'
import Greeting from './Greeting';
import ClassGreeting from './ClassGreeting';

function App() {
  const element = <h2>Hello from JSX!!</h2>;
  const image = <img src="vite.svg" alt="Vite Logo" width="100" />;

  const container = {
    textAlign: "center",
    padding: "10px",
    border: "double 12px black"
  }

  return (
    <div style={ container }>
      {/* JSX Comment */}
      { element }
      { image }
      <Greeting />
      <ClassGreeting />
    </div>
  )
}

export default App
