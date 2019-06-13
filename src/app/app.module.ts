import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { components } from '../elements';
import { SluiButtonComponent } from './slui-button/slui-button.component';
import { SluiAlertComponent } from './slui-alert/slui-alert.component';

@NgModule({
  declarations: [
    SluiButtonComponent,
    SluiAlertComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [SluiAlertComponent, SluiButtonComponent]
})
export class AppModule {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
 
    const el = createCustomElement(SluiButtonComponent, {
      injector: this.injector
    });
    customElements.define('slui-button', el);

    const el2 = createCustomElement(SluiAlertComponent, {
      injector: this.injector
    });
    customElements.define('slui-alert', el2);
  }
}
