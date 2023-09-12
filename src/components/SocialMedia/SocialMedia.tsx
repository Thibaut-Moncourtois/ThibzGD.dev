import LinkedInLogo from '../../assets/linkedin.png';
import GithubLogo from '../../assets/github.png';

function socialMedia() {
  return (
    <section className="logos">
      <div className="github-logo">
        <a href="https://github.com/Thibaut-Moncourtois">
          <header className="absolute top-30 left-20">
            <img className="w-5  " src={GithubLogo} alt="LogoGithub" />
          </header>
        </a>
      </div>

      <div className="linkedin-logo">
        <a href="https://www.linkedin.com/in/thibaut-moncourtois/">
          <header className="absolute top-30 right left-8  ">
            <img className="w-5" src={LinkedInLogo} alt="LogoLinkedIn" />
          </header>
        </a>
      </div>
    </section>
  );
}

export default socialMedia;
