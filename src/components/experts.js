import { LitElement, html, css } from 'lit';

export class MyExperts extends LitElement {
  static styles = css`
    .experts {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      padding: 60px 40px;
      flex-wrap: wrap;
      color: rgba(255, 255, 255, 0.7);
    }

    .video-thumbnail {
      position: relative;
    }

    .video-thumbnail img {
      width: 320px;
      border-radius: 10px;
      display: block;
    }

    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 48px;
      background: rgba(255, 255, 255, 0.7);
      color: black;
      padding: 10px;
      border-radius: 50%;
      cursor: pointer;
    }

    .expert-text {
      max-width: 500px;
      text-align: left;
      color: rgb(255, 248, 248);
    }

    .expert-text h2 {
      font-size: 40px;
      line-height: 1.2;
      margin: 0;
      color: rgb(255, 255, 255);
    }

    .expert-text h3 {
      font-size: 36px;
      margin: 10px 0 20px 0;
      font-weight: normal;
    }

    .expert-text p {
      line-height: 1.6;
      font-size: 16px;
      margin-bottom: 20px;
    }

    .expert-text a {
      display: inline-block;
      padding: 10px 20px;
      background: #a259ff;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }

    @media (max-width: 768px) {
      .experts {
        flex-direction: column;
        text-align: center;
      }

      .expert-text {
        text-align: center;
      }
    }
  `;

  render() {
    return html`
      <div class="experts">
        <div class="video-thumbnail">
          <img src="src/images/babygirl.png" alt="Video" />
          <div class="play-button">&#9658;</div>
        </div>
        <div class="expert-text">
          <h2>Our Experts</h2>
          <h3>Teacher</h3>
          <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
          <a href="#">Learn More</a>
        </div>
      </div>
    `;
  }
}

customElements.define('my-experts', MyExperts);
