import '../Css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">services</a>
              </li>
              <li>
                <a href="#">Our Program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">call us</a>
              </li>
              <li>
                <a href="#">chat with us</a>
              </li>
              {/* <li>
                <a href="#">order status</a>
              </li> */}
              {/* <li>
                <a href="#">payment options</a>
              </li> */}
            </ul>
          </div>
          <div className="footer-col">
            <h4>our offers</h4>
            <ul>
              <li>
                <a href="#">Five Free class</a>
              </li>
              <li>
                <a href="#">classroom Notes</a>
              </li>
              <li>
                <a href="#">recording session</a>
              </li>
              <li>
                <a href="#">practice papers</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100091682525827">
                <i className="fab fa-facebook-f"></i>
              </a>
              {/* <a href="#">
                <i className="fab fa-twitter"></i>
              </a> */}
              <a
                target="blank"
                rel="noopener noreferrer"
                href="https://wa.me/918109215210"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/dr_khan_classes/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/drkhan-classes-345753271/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCHB5HJg45yK5O61Je-F3dwA">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
