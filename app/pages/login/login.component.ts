import { Component } from "@angular/core";
//https://github.com/NativeScript/nativescript-cli/issues/943

@Component({
    selector: "my-app",
    template: `
    <StackLayout>
        <Image src="res://logo_login" stretch="none" horizontalAlignment="center"></Image>
        <TextField hint="Email Address" keyboardType="email"
                   autocorrect="false" autocapitalizationType="none"></TextField>
        <TextField hint="Password" secure="true"></TextField>
    
        <Button text="Sign in"></Button>
        <Button text="Sign in" class="submit-button" (tap)="submit()></Button>
    </StackLayout>`
    ,
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent {
    constructor() {}

    submit() {
        console.log("Vicens");
    }
}