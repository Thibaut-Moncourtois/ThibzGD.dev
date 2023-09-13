import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function socialMedia() {
  return (
    <section className="flex justify-center gap-16 py-3">
      <div className="github-logo">
        <a href="https://github.com/Thibaut-Moncourtois">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-4xl dark:text-white"
          />
        </a>
      </div>

      <div className="twitter-logo">
        <a href="https://twitter.com/Thibz_GD">
          <FontAwesomeIcon
            icon={faXTwitter}
            className="text-4xl text-black dark:text-white"
          />
        </a>
      </div>

      <div className="linkedin-logo">
        <a href="https://www.linkedin.com/in/thibaut-moncourtois/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-4xl text-black dark:text-white"
          />
        </a>
      </div>
    </section>
  );
}

export default socialMedia;
