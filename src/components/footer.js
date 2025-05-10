import { LitElement, html, css } from 'lit';

export class footer extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }

    .newsletter-section {
      background-color: #1f1f5c; 
      color: white;
      text-align: center;
      padding: 60px 20px 40px;
    }

    .newsletter-section h2 {
      font-size: 36px;
      margin: 10px 0;
    }

    .newsletter-section p {
      color: #d0d0e0;
      font-size: 14px;
    }

    .newsletter-section small {
      color: #a259ff;
      font-weight: bold;
    }

    .subscribe-form {
      margin: 30px auto;
      display: flex;
      max-width: 500px;
      background: white;
      border-radius: 8px;
      overflow: hidden;
    }

    .subscribe-form input[type="email"] {
      flex: 1;
      padding: 15px;
      border: none;
      font-size: 14px;
    }

    .subscribe-form button {
      background: #a259ff;
      color: white;
      border: none;
      padding: 0 25px;
      cursor: pointer;
    }

    .footer {
      background: white; 
      padding: 40px 20px 20px;
      color: #333;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }

    .footer h4 {
      margin-bottom: 15px;
      font-size: 14px;
    }

    .footer ul {
      list-style: none;
      padding: 0;
      font-size: 13px;
    }

    .footer ul li {
      margin-bottom: 8px;
    }

    .footer ul li i {
      margin-right: 8px;
      color: #a259ff;
    }

    .footer-bottom {
      text-align: center;
      font-size: 12px;
      border-top: 1px solid #ddd;
      padding-top: 15px;
      color: #666;
    }

    .footer-icons {
      margin-top: 10px;
    }

    .footer-icons a {
      margin: 0 10px;
      color: #a259ff;
      font-size: 18px;
    }
  `;

  render() {
    return html`
      <div class="newsletter-section">
        <small>Newsletter</small>
        <h2>Our Popular Courses</h2>
        <p>
          Problems trying to resolve the conflict between<br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div class="subscribe-form">
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div class="footer">
        <div class="footer-grid">
          <div>
            <h4>Company Info</h4>
            <ul>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4>Features</h4>
            <ul>
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>
          <div>
            <h4>Get In Touch</h4>
            <ul>
              <li><i class="fas fa-phone"></i> (480) 555-0103</li>
              <li><i class="fas fa-map-marker-alt"></i> 4517 Washington Ave. Manchester, Kentucky 39495</li>
              <li><i class="fas fa-envelope"></i> debra.holt@example.com</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          Made With Love By Figmaland All Right Reserved
          <div class="footer-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('my-footer', footer);
