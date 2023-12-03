export default function Contact() {
  return (
    <div className="container" id="contact">
      <h2>Let's Talk!</h2>
      <div className="contact-group">
        <a href="mailto:gouvin.lucy@gmail.com">
          <div className="email-group">
            <img src="./email.png"></img>
            <p>gouvin.lucy@gmail.com</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/lucy-gouvin">
          <div className="linkedin-group">
            <img src="./linkedin.png"></img>
            <p>linkedin.com/in/lucy-gouvin</p>
          </div>
        </a>
        <a
          href="https://github.com/lucygouvin
"
        >
          <div className="github-group">
            <img src="./github.png"></img>
            <p>github.com/lucygouvin</p>
          </div>
        </a>
      </div>
    </div>
  );
}
