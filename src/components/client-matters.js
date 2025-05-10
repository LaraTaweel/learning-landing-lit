import { LitElement, html, css } from 'lit';

export class MyClientMatters extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #1f1f5c;
      color: white;
      padding: 60px 40px;
      font-family: 'Arial', sans-serif;
    }
    h2 {
      font-size: 36px;
      margin-bottom: 8px;
      font-weight: bold;
    }
    .subtitle {
      color: #ccc;
      margin-bottom: 40px;
      max-width: 600px;
    }
    .cards {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: nowrap;
    }
    .card {
      background: #fff;
      color: #333;
      width: 22%;
      height: 260px;
      padding: 24px 16px;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 30px rgba(0,0,0,0.2);
    }
    .card img {
      width: 60px;
      height: 60px;
      margin: 0 auto 16px;
    }
    .card h3 {
      font-size: 14px;
      font-weight: bold;
      margin: 0;
      color: #252B42;
    }
    .card h3::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background: #E74040;
      margin: 8px auto 12px;
    }
    .card p {
      font-size: 12px;
      color: #737373;
      margin: 0;
    }

    @media (max-width: 900px) {
      .card { width: 48%; margin-bottom: 20px; }
    }
    @media (max-width: 500px) {
      .card { width: 100%; }
    }
  `;

  render() {
    const items = [
      { icon: 'src/images/icon1.png', title: 'Training Courses', text: 'The gradual accumulation of information about' },
      { icon: 'src/images/icon2.png', title: '2,769 online courses', text: 'The gradual accumulation of information about' },
      { icon: 'src/images/icon3.png', title: 'Books Library', text: 'The gradual accumulation of information about' },
      { icon: 'src/images/icon4.png', title: '2,769 online courses', text: 'The gradual accumulation of information about' },
    ];

    return html`
      <section>
        <h2>Every Client Matters</h2>
        <p class="subtitle">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div class="cards">
          ${items.map(i => html`
            <div class="card">
              <img src="${i.icon}" alt="${i.title}" />
              <h3>${i.title}</h3>
              <p>${i.text}</p>
            </div>
          `)}
        </div>
      </section>
    `;
  }
}

customElements.define('my-client-matters', MyClientMatters);
