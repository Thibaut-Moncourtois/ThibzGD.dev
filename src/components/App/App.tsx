import DarkMode from '../DarkMode/DarkMode';
import MonCv from '../../assets/cv-tm.pdf';
import SocialMedia from '../SocialMedia/SocialMedia';
import Avatar from '../Avatar/Avatar';
import './App.scss';
import CodeIcon from '../Icon3d/CodeIcon';
import Icon3d from '../Icon3d/Icon3d';
import EmailIcon from '../Icon3d/EmailIcon';
import Pokedex from '../../assets/pokedex.png';
import Footer from '../Footer /Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title> ThibzGD Website</title>
        <meta name="description" />
      </header>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Developed by ThibzGD</h1>
            <ul className="flex items-center">
              <li>
                <DarkMode />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href={MonCv}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mon CV
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Thibaut Moncourtois
            </h2>
            <h3 className="text-2xl py-2 text-black md:text-3xl dark:text-gray-400">
              Developpeur & designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
              Transformez vos idées en sites web exceptionnels! Ensemble,
              faisons de votre présence en ligne un succès incontestable.
            </p>
          </div>
          <SocialMedia />
          <div>
            <Avatar />
          </div>
        </section>

        <section className="py-8">
          <div>
            <h3 className="text-4xl py-1 mt-10 pb-4 text-center text-black dark:text-gray-400">
              Qui suis-je ?
            </h3>
            <p className="text-md py-2 px-10 leading-8 mt-5 text-center text-gray-800 dark:text-gray-400">
              Après plusieurs années passées dans le domaine du sport, j'ai
              engagé il y a 1 ans un processus de reconversion professionnelle
              afin de me réorienter vers le domaine informatique. J’ai donc
              entrepris une formation de développeur
              <span className="text-teal-500 font-medium">
                {' '}
                Fullstack JavaScript{' '}
              </span>
              complétée par un cursus en autoformation sur le CRM{' '}
              <span className="text-teal-500 font-medium"> Saleforce. </span>
              Actuellement, je continue de concevoir des applications afin de
              poursuivre mon apprentissage du langage, et je passe les
              différents niveaux de certification pour valider mon expertise de
              développeur et dans l’optique d’atteindre la cetification
              d’architect Salesforce.
            </p>
            <p>
              <span className="text-teal-500 font-bold flex justify-center mt-5 pb-10">
                "Ce que nous devons apprendre à faire, nous l'apprenons en le
                faisant."
              </span>
            </p>
          </div>
          <div className="section-icon lg:flex gap-10">
            <div className="text-center shadow-lg pb-10 rounded-xl my-10 dark:shadow-gray-800">
              <Icon3d />
              <h3 className="text-lg font-medium pt-8 pb-2">Designs Épurés</h3>
              <p className="py-2 mx-2">
                Créer des designs élégants adaptés à vos besoins!
              </p>
              <h4 className="py-4 text-teal-600">Outils que j'utilise:</h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Illustrator
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Canva</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
            </div>

            <div className="text-center shadow-lg pb-10 rounded-xl my-10 dark:shadow-gray-800">
              <EmailIcon />
              <h3 className="text-lg font-medium pt-8 pb-2">Me contacter</h3>
              <p className="py-2 mx-2">
                Créer des designs élégants adaptés à vos besoins!
              </p>
              <h4 className="py-4 text-teal-600">Réseaux que j'utilise:</h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">LinkedIn</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Gmail</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Twitter | X
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Hibou</p>
            </div>

            <div className="text-center shadow-lg pb-10 rounded-xl my-10 dark:shadow-gray-800">
              <CodeIcon />
              <h3 className="text-lg font-medium pt-8 pb-2">Code</h3>
              <p className="py-2 mx-2">
                En constant apprentissage de nouvelles technos!
              </p>
              <h4 className="py-4 text-teal-600">
                Langages et technos que j'utilise:
              </h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                React | TypeScript
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Next.js</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Node.js | Adonis
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                PostgreSQL
              </p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-4xl py-1 pb-4 text-black dark:text-gray-400 text-center">
              Portfolio
            </h3>
            <p className="text-md py-2 px-10 pb-10 mt-5 leading-8 text-gray-800 dark:text-gray-400 text-center">
              Je m'investis pleinement dans la création d'application et site
              web afin de toujours{' '}
              <span className="text-teal-500 font-medium"> apprendre </span>et
              de <span className="text-teal-500 font-medium"> grandir </span>
              dans ce domaine. Je suis très heureux de pouvoir partager mon
              travail avec vous!
            </p>
          </div>
          <div className="project-section flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <img
                src={Pokedex}
                alt="Pokedex"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
