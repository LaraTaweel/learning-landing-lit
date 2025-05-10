import { LitElement, html, css } from 'lit';

export class MyTestimonials extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #1f1f5c;
      color: white;
      padding: 80px 40px;
    }

    .intro {
      text-align: center;
      max-width: 1200px;
      margin: 0 auto 40px;
    }

    .intro span, .intro h2, .intro p.subtitle {
      display: block;
    }

    h2 {
      font-size: 36px;
      margin-bottom: 8px;
    }

    p.subtitle {
      color: #ccc;
      margin-bottom: 16px;
      font-size: 16px;
    }

    .cards {
      display: flex;
      gap: 30px;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1200px;
      margin: 0 auto;
    }

    .card {
      background: #fff;
      color: #333;
      width: 300px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 0;
    }

    .card img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 16px;
    }

    .stars {
      color: #f5c518;
      font-size: 18px;
      margin-bottom: 10px;
    }

    .card p {
      font-size: 14px;
      color: #666;
      margin-bottom: 8px;
      line-height: 1.6;
    }

    .name {
      font-weight: bold;
      font-size: 16px;
    }

    .role {
      font-size: 14px;
      color: #999;
    }

    @media (max-width: 600px) {
      .card {
        width: 100%;
        height: auto;
      }

      .intro {
        padding: 0 10px;
      }
    }
  `;

  render() {
    const testimonials = [
      {
        img: 'src/images/user1.png',
        text: '“This course changed my life and helped me land my dream job!”',
        name: 'Regina Miles',
        role: 'Designer',
        rating: 5
      },
      {
        img: 'src/images/user2.png',
        text: '“In-depth content and amazing instructors. Highly recommend.”',
        name: 'John Doe',
        role: 'Developer',
        rating: 5
      },
    ];

    return html`
      <section>
        <div class="intro">
          <span style="font-size:12px; color:#888;">Testimonials</span>
          <h2>Get Quality Education</h2>
          <p class="subtitle">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div class="cards">
          ${testimonials.map(t => html`
            <div class="card">
              <img src="${t.img}" alt="${t.name}" />
              <div class="stars">${'★'.repeat(t.rating)}</div>
              <p>${t.text}</p>
              <div class="name">${t.name}</div>
              <div class="role">${t.role}</div>
            </div>
          `)}
        </div>
      </section>
    `;
  }
}

customElements.define('my-testimonials', MyTestimonials);
