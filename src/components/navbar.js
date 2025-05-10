import { LitElement, html, css } from 'lit';

export class MyNavbar extends LitElement {
  static styles = css`
    nav { display:flex; justify-content:space-between; padding:20px 40px; background:#242424; }
    .logo { color:white; font-size:24px; }
    ul { list-style:none; display:flex; gap:20px; margin:0; }
    a { color:white; text-decoration:none; }
    .buttons a { margin-left:15px; padding:10px 20px; border-radius:5px; font-weight:bold; }
    .login { background:transparent; }
    .join { background:#a259ff; color:white; }
  `;

  render() {
    return html`
      <nav>
        <div class="logo">BrandName</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div class="buttons">
          <a href="#" class="login">Login</a>
          <a href="#" class="join">JOIN US</a>
        </div>
      </nav>
    `;
  }
}
customElements.define('my-navbar', MyNavbar);
