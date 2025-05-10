import { LitElement, html, css } from 'lit';

export class MyHero extends LitElement {
  static styles = css`
    .hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 0px; /* صفرنا الأطراف */
  // width: 100%;
  margin-left:40px;
}


    .hero-text {
      max-width: 500px;
      color: white;
    }

    .hero-text h1 {
      font-size: 48px;
      margin: 20px 0;
    }

    .hero-buttons button {
      padding: 10px 20px;
      margin-right: 10px;
      margin-top: 20px;
      border: none;
      border-radius: 5px;
      background: #a259ff;
      color: #ffffff;
      cursor: pointer;
    }

    .hero-image img {
  width: 500px; /* تم تكبير الصورة أكثر */
  max-width: 100%;
  margin: 0px; /* تبعد عن الطرف */
}


    @media (max-width: 768px) {
      .hero {
        flex-direction: column;
        text-align: center;
      }

      .hero-image img {
        margin: 20px 0 0 0;
      }

      .hero-text {
        text-align: center;
      }
    }
  `;

  render() {
    return html`
      <section class="hero">
        <div class="hero-text">
          <p class="welcome">Welcome</p>
          <h1>Best Learning Opportunities</h1>
          <p>Every day brings with it a fresh set of learning possibilities.</p>
          <div class="hero-buttons">
            <button @click=${this._onQuote}>Get Quote Now</button>
            <button>Learn More</button>
          </div>
        </div>
        <div class="hero-image">
          <img src="src/images/girl1.png" alt="Girl Learning" />
        </div>
      </section>
    `;
  }

  _onQuote() {
    const name = prompt('What is your name?');
    if (name) alert(`Hi ${name}, our team will contact you shortly!`);
  }
}

customElements.define('my-hero', MyHero);
