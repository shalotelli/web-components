import {LitElement, html} from 'lit-element';

class ProgressBar extends LitElement {

  static get properties() {
    return { complete: { type: Number } }
  }

  constructor() {
    super();
    this.complete = 0;
  }

  attributeChangedCallback(name, oldVal, newVal) {
    var innerBar = this.shadowRoot.querySelector('.progress-bar-inner');

    switch(name) {
      case 'complete':
        this.complete = parseInt(newVal, 10) || 0;

        if (innerBar) {
          innerBar.style.width = this.complete + '%';
        }
    }
  }

  render() {
    return html`
      <style>
        .progress-bar {
          width: 50%;
          height: 30px;
          background-color: #EDF2F4;
          border-radius: 5px;
          color: #FFF;
        }
        .progress-bar-inner {
          height: 100%;
          line-height: 30px;
          background: #2B2D42;
          text-align: center;
          border-radius: 5px;
          transition: width 0.25s;
        }
      </style>
      <div class="progress-bar">
        <div class="progress-bar-inner">${this.complete}%</div>
      </div>
    `;
  }

}

customElements.define('progress-bar', ProgressBar);