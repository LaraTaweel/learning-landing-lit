import { LitElement, html, css } from 'lit';

export class courses extends LitElement {
  static styles = css`
    :host { display: block; background: #1f1f5c; color: white; padding: 60px 40px; }
    h2 { font-size: 32px; margin-bottom: 8px; }
    p.subtitle { margin-bottom: 40px; color: #ccc; }
    .grid { display: flex; gap: 20px; flex-wrap: wrap; }
    .course {
      background: #fff;
      color: #333;
      flex: 1 1 calc(25% - 20px);
      border-radius: 8px;
      overflow: hidden;
    }
    .course img { width: 100%; display: block; }
    .badge {
      position: absolute;
      top: 16px; left: 16px;
      background: red; color: white;
      padding: 4px 8px; border-radius: 4px;
      font-size: 12px; text-transform: uppercase;
    }
    .info { padding: 16px; position: relative; }
    .info h3 { margin: 0 0 8px; font-size: 18px; }
    .info p { font-size: 14px; color: #666; margin: 0 0 12px; }
    .meta { display: flex; justify-content: space-between; font-size: 12px; color: #999; margin-bottom: 12px; }
    .price { font-weight: bold; }
    .actions { text-align: right; }
    .actions button {
      background: none;
      border: 1px solid #a259ff;
      color: #a259ff;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }
    @media (max-width: 800px) {
      .course { flex: 1 1 calc(50% - 20px); }
    }
    @media (max-width: 500px) {
      .course { flex: 1 1 100%; }
    }
  `;

  render() {
    const courses = [
      { img: 'src/images/course1.png', title: 'Expert Instruction', sold: 15, oldPrice: '$16.48', price: '$6.48' },
      { img: 'src/images/course2.png', title: '2,769 online courses', sold: 15, oldPrice: '$16.48', price: '$6.48' },
      { img: 'src/images/course3.png', title: 'Training Courses', sold: 15, oldPrice: '$16.48', price: '$6.48' },
      { img: 'src/images/course4.png', title: 'Lifetime Access', sold: 15, oldPrice: '$16.48', price: '$6.48' },
    ];
    return html`
      <section>
        <h2>Most Popular Courses</h2>
        <p class="subtitle">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        <div class="grid">
          ${courses.map(c => html`
            <div class="course">
              <div style="position:relative;">
                <img src="${c.img}" alt="${c.title}" />
                <div class="badge">Sale</div>
              </div>
              <div class="info">
                <h3>${c.title}</h3>
                <p>We focus on ergonomics and meeting you…</p>
                <div class="meta">
                  <span>❤ ${c.sold} Sales</span>
                  <span class="price">${c.price}</span>
                </div>
                <div class="actions">
                  <button>Learn More</button>
                </div>
              </div>
            </div>
          `)}
        </div>
      </section>
    `;
  }
}

customElements.define('my-courses', courses);
