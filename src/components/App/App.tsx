import DarkMode from '../DarkMode/DarkMode';
import MonCv from '../../assets/cv-tm_compressed.pdf';
import SocialMedia from '../SocialMedia/SocialMedia';
import Avatar from '../Avatar/Avatar';
import './App.scss';
import CodeIcon from '../Icon3d/CodeIcon';
import Icon3d from '../Icon3d/Icon3d';
import EmailIcon from '../Icon3d/EmailIcon';
import Pokedex from '../../assets/pokedex.png';
import ImmoPros from '../../assets/immopros.png';
import Footer from '../Footer /Footer';
import TechnoTitle from '../UI/TechnoTitle';
import Card from '../UI/Card';

function App() {
  return (
    <div className="App flex-col md:flex-row">
      <main className="bg-white px-4 dark:bg-gray-900 ">
        <div className="max-w-[1560px] mx-auto">
          <section className="xl:min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-lg w-[50%] text-center lg:text-xl">
                Developed by ThibzGD
              </h1>
              <ul className="flex items-center gap-4 sm:gap-8 md:gap-12">
                <li>
                  <DarkMode />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-2 rounded-md"
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
              <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl text-center">
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

          <section className="py-8 max-w-[1200px] mx-auto lg:text-xl">
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
                poursuivre mon apprentissage du langage, et je passe également
                les différents niveaux de certification pour valider mon
                expertise de développeur et dans l’optique d’atteindre la
                cetification d’architect Salesforce.
              </p>
              <p>
                <span className="text-teal-500 font-bold flex justify-center mt-5 pb-10 text-center">
                  "Ce que nous devons apprendre à faire, nous l'apprenons en le
                  faisant."
                </span>
              </p>
            </div>
            <div className="section-icon lg:flex items-center justify-around gap-12">
              <Card
                title="Designs Épurés"
                subTitle="Créer des designs élégants adaptés à vos besoins!"
                intro="Outils que j'utilise:"
                icon={<Icon3d />}
                tools={['Photoshop', 'Illustrator', 'Canva', 'Figma']}
              />
              <Card
                title="Me contacter"
                subTitle="Créer des designs élégants adaptés à vos besoins!"
                intro="Réseaux que j'utilise:"
                icon={<EmailIcon />}
                tools={['LinkedIn', 'Gmail', 'Twitter | X', 'Hibou']}
              />
              <Card
                title="Code"
                subTitle="En constant apprentissage de nouvelles technos!"
                intro="Langages et technos que j'utilise:"
                icon={<CodeIcon />}
                tools={[
                  'React | TypeScript',
                  'Next.js',
                  'Node.js | Adonis',
                  'PostgreSQL',
                ]}
              />
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
            <div className="project-section flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <img
                  src={ImmoPros}
                  alt="ImmoPros"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
