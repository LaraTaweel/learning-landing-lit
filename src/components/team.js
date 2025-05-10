import { LitElement, html, css } from 'lit';

export class CoursesSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #1f1f5c;
      color: white;
      font-family: Arial, sans-serif;
    }

    .section-container {
    //   text-align: center;
      padding: 60px 20px;
    }

    .section-container h1 {
     margin-left:40px;
      font-size: 40px;
      margin-bottom: 10px;

    }

    .section-container p {
      font-size: 14px;
       margin-left:40px;
      color: #d0d0e0;
      max-width: 600px;
            margin-bottom: 70px;

    //   margin: 0 auto 40px;
    }

    .cards-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }

    .card {
      background-color: white;
      color: black;
      border-radius: 16px;
      overflow: hidden;
      width: 240px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .card img {
      width: 100%;
      height: 240px;
      object-fit: cover;
    }

    .card-content {
      padding: 20px;
      text-align: center;
    }

    .card-content h3 {
      margin: 0;
      font-size: 18px;
    }

    .card-content p {
      margin: 5px 0 15px;
      font-size: 14px;
      color: gray;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 16px;
    }

    .social-icons a {
      color: #a259ff;
      text-decoration: none;
      font-size: 20px;
    }
  `;

  renderCard(imageUrl) {
    return html`
      <div class="card">
        <img src="${imageUrl}" alt="Instructor">
        <div class="card-content">
          <h3>Julian Jameson</h3>
          <p>Profession</p>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    `;
  }

  render() {
    return html`
   
    <div class="section-container">
        <h1>Watch our Courses</h1>
        <p>
          Problems trying to resolve the conflict between<br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div class="cards-container">
          ${this.renderCard('src/images/cover1.png')}
          ${this.renderCard('src/images/cover2.png')}
          ${this.renderCard('src/images/cover3.png')}
          ${this.renderCard('src/images/cover4.png')}
        </div>
      </div>
    `;
  }
}

customElements.define('my-team', CoursesSection);
