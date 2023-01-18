import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RoutingModule } from './/routing.module';
import {FormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UploadsComponent } from './uploads/uploads.component';
import { UserperformComponent } from './userperform/userperform.component';
import { CComponent } from './c/c.component';
import { CppComponent } from './cpp/cpp.component';
import { JavaComponent } from './java/java.component';
import { UsernavComponent } from './usernav/usernav.component';
import { UserinforComponent } from './userinfor/userinfor.component';
import { BegginerComponent } from './begginer/begginer.component';
import { MiduemComponent } from './miduem/miduem.component';
import { ExpertComponent } from './expert/expert.component';
import { Userc1Component } from './userc1/userc1.component';
import { Userc2Component } from './userc2/userc2.component';
import { Userc3Component } from './userc3/userc3.component';
import { Usercpp3Component } from './usercpp3/usercpp3.component';
import { Usercpp2Component } from './usercpp2/usercpp2.component';
import { Usercpp1Component } from './usercpp1/usercpp1.component';
import { Userjava1Component } from './userjava1/userjava1.component';
import { Userjava2Component } from './userjava2/userjava2.component';
import { Userjava3Component } from './userjava3/userjava3.component';
import { Adminjava3Component } from './adminjava3/adminjava3.component';
import { Adminjava2Component } from './adminjava2/adminjava2.component';
import { Adminjava1Component } from './adminjava1/adminjava1.component';
import { Adminc1Component } from './adminc1/adminc1.component';
import { Adminc2Component } from './adminc2/adminc2.component';
import { Adminc3Component } from './adminc3/adminc3.component';
import { Admincpp1Component } from './admincpp1/admincpp1.component';
import { Admincpp2Component } from './admincpp2/admincpp2.component';
import { Admincpp3Component } from './admincpp3/admincpp3.component';
import { TermsandcondtionsComponent } from './termsandcondtions/termsandcondtions.component';
import { AddquestionsComponent } from './addquestions/addquestions.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    ContactusComponent,
    CarouselComponent,
    AdminComponent,
    UserComponent,
    AdminnavComponent,
    UserinfoComponent,
    UploadsComponent,
    UserperformComponent,
    CComponent,
    CppComponent,
    JavaComponent,
    UsernavComponent,
    UserinforComponent,
    BegginerComponent,
    MiduemComponent,
    ExpertComponent,
    Userc1Component,
    Userc2Component,
    Userc3Component,
    Usercpp3Component,
    Usercpp2Component,
    Usercpp1Component,
    Userjava1Component,
    Userjava2Component,
    Userjava3Component,
    Adminjava3Component,
    Adminjava2Component,
    Adminjava1Component,
    Adminc1Component,
    Adminc2Component,
    Adminc3Component,
    Admincpp1Component,
    Admincpp2Component,
    Admincpp3Component,
    TermsandcondtionsComponent,
    AddquestionsComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,FormsModule,RoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
