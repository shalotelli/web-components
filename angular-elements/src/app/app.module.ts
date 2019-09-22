import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [AppComponent, ProgressbarComponent]
})
export class AppModule {
  constructor(public injector: Injector) {}

  ngDoBootstrap() {
    const PorgressbarElement = createCustomElement(ProgressbarComponent, {
      injector: this.injector
    });

    customElements.define('progressbar-element', PorgressbarElement);
  }
}
