import LinkedInLogo from '../../assets/linkedin.png';
import GithubLogo from '../../assets/github.png';
import TwitterLogo from '../../assets/twitter.png';

function socialMedia() {
  return (
    <section className="flex justify-center gap-16 py-3">
      <div className="github-logo">
        <a href="https://github.com/Thibaut-Moncourtois">
          <img className="w-10 " src={GithubLogo} alt="LogoGithub" />
        </a>
      </div>

      <div className="twitter-logo">
        <a href="https://twitter.com/Thibz_GD">
          <img className="w-10" src={TwitterLogo} alt="LogoLinkedIn" />
        </a>
      </div>

      <div className="linkedin-logo">
        <a href="https://www.linkedin.com/in/thibaut-moncourtois/">
          <img className="w-10" src={LinkedInLogo} alt="LogoLinkedIn" />
        </a>
      </div>
    </section>
  );
}

export default socialMedia;
