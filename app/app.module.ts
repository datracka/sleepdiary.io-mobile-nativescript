import {NgModule} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/platform";

import {NativeScriptRouterModule} from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import {NativeScriptFormsModule} from "nativescript-angular/forms";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)],
    declarations: [
        AppComponent,
        ...navigatableComponents,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
