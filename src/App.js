import './App.css';
import Displybikes from './components/Displybikes';
import LoginCompo from './components/LoginCompo';
import Managers from './components/Managers';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h2>Welcome</h2>
      </header>

      <section>
        <Managers/>
      </section>
      <section>
        <LoginCompo/>
      </section>
      <section>
       <Displybikes/>
      </section>
    </div>
  );
}

export default App;
