import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: "<Label text='hello Nacho'></Label>"
})
export class AppComponent {
    constructor() {
        console.log('######');
        console.log(BASE_URL);
        console.log('#######');
    }
}