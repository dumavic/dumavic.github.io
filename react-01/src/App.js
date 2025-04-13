import './App.css';
import Tree from "./components/Tree";

function App() {
  return (
    <div>
      <header>
        <h1>My favorite trees</h1>
      </header>
      <Tree name="live oak" description="doesn't lose its leaves in the winter, so it looks alive"/>
    </div>
  );
}

export default App;