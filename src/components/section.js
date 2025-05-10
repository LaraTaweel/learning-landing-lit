import { LitElement, html, css } from 'lit';

export class section extends LitElement {
  static styles = css`
    :host { display: block; background: #1f1f5c; color: white; padding: 80px 40px; }
    .wrapper { display: flex; align-items: center; gap: 40px; flex-wrap: wrap; }
    .image { flex: 1 1 300px; }
    .image img { width: 100%; display: block; border-radius: 8px; }
    .text { flex: 1 1 300px; }
    .text h2 { font-size: 32px; margin-bottom: 16px; }
    .text p { color: #ccc; margin-bottom: 24px; line-height: 1.6; }
    .text a {
      color: #a259ff;
      text-decoration: none;
      font-weight: bold;
    }
    @media (max-width: 800px) {
      .wrapper { flex-direction: column-reverse; }
      .text, .image { flex: 1 1 100%; }
    }
  `;

  render() {
    return html`
      <section class="wrapper">
        <div class="image">
<img src="src/images/Video.png" alt="Girl Learning" />

          </div>
        <div class="text">
          <div style="width:40px; height:4px; background:#f9575c; margin-bottom:12px;"></div>
          <h2>Our Popular Courses</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          <a href="#">Learn More →</a>
        </div>
      </section>
    `;
  }
}

customElements.define('my-section', section);
