import './App.css';
import { Button } from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Wall App</h1>
        <Button text="HI" onClick={() => console.log('hi')} />
      </header>
    </div>
  );
}

export default App;
