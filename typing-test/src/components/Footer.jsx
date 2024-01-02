import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <span id = "footer-text">Made By Fred</span>
      <span>
      <a href="https://github.com/fredh2006" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" color = "#000"/>
      </a>
      </span>
    </div>
  );
}

export default Footer;
