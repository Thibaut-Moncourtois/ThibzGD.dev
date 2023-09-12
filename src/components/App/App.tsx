import DarkMode from '../DarkMode/DarkMode';
import SocialMedia from '../SocialMedia/SocialMedia';
import Avatar from '../Avatar/Avatar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title> ThibzGD Website</title>
        <meta name="description" />
      </header>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Developed by ThibzGD</h1>
            <ul className="flex items-center">
              <li>
                <DarkMode />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="/resume"
                >
                  My Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Thibaut Moncourtois
            </h2>
            <h3 className="text-2xl py-2 text-black">
              Developpeur et designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Transformez vos idées en sites web exceptionnels! Ensemble,
              faisons de votre présence en ligne un succès incontestable.
            </p>
          </div>
          <SocialMedia />
          <div>
            <Avatar />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
