import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'progress-bar',
  styleUrl: 'progressbar.css',
  shadow: false
})
export class Progressbar {
  /**
   * Percentage complete
   */
  @Prop() complete: Number = 0;

  @Watch('complete')
  completeWatchHandler() {
    const progressBarInner = document.querySelector('.progress-bar-inner');
    progressBarInner['style'].width = `${this.complete}%`;
  }

  render() {
    return (
      <div class="progress-bar">
        <div class="progress-bar-inner">
          {this.complete}%
        </div>
      </div>
    );
  }
}
