import { LitElement, html, css } from 'lit';

export class MyStats extends LitElement {
  static styles = css`
    .stats { display:flex; justify-content:space-around; padding:60px 20px; font-weight:bold ;text-align:center;  background:#2a2a6a; color: #a259ff;}
    .stats div { font-size:24px; }
    .stats span { display:block; font-size:14px; margin-top:5px; color:#ccc; }
  `;
  render() {
    return html`
      <section class="stats">
        <div>15K<br /><span>Happy Customers</span></div>
        <div>150K<br /><span>Monthly Visitors</span></div>
        <div>15<br /><span>Countries Worldwide</span></div>
        <div>100+<br /><span>Top Partners</span></div>
      </section>
    `;
  }
}
customElements.define('my-stats', MyStats);
