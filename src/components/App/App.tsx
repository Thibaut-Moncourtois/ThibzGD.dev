import DarkMode from '../DarkMode/DarkMode';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title> ThibzGD Website</title>
        <meta name="description" />
      </header>
      <main>
        <section className="min-h-screen">
          <nav>
            <h1>Developed by ThibzGD</h1>
            <ul>
              <li>
                <DarkMode />
              </li>
              <li>
                <a href="/resume">My Resume</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}

export default App;
