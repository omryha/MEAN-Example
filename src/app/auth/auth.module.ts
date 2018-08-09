import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AngulerMaterialModule } from "../anguler-material.module";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports: [
        AngulerMaterialModule,
        CommonModule,
        FormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule {}