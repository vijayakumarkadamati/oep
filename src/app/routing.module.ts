import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UploadsComponent } from './uploads/uploads.component';
import { UserperformComponent } from './userperform/userperform.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { CComponent } from './c/c.component';
import { CppComponent } from './cpp/cpp.component';
import { JavaComponent } from './java/java.component';
import { UserinforComponent } from './userinfor/userinfor.component';
import { BegginerComponent } from './begginer/begginer.component';
import { MiduemComponent } from './miduem/miduem.component';
import { ExpertComponent } from './expert/expert.component';
import { UsernavComponent } from './usernav/usernav.component';
import { Userc1Component } from './userc1/userc1.component';
import { Userc2Component } from './userc2/userc2.component';
import { Usercpp1Component } from './usercpp1/usercpp1.component';
import { Usercpp2Component } from './usercpp2/usercpp2.component';
import { Userjava2Component } from './userjava2/userjava2.component';
import { Adminc1Component } from './adminc1/adminc1.component';
import { Admincpp1Component } from './admincpp1/admincpp1.component';
import { Adminjava1Component } from './adminjava1/adminjava1.component';
import { Admincpp2Component } from './admincpp2/admincpp2.component';
import { Adminc2Component } from './adminc2/adminc2.component';
import { Adminjava2Component } from './adminjava2/adminjava2.component';
import { Adminc3Component } from './adminc3/adminc3.component';
import { Admincpp3Component } from './admincpp3/admincpp3.component';
import { Adminjava3Component } from './adminjava3/adminjava3.component';
import { Userjava1Component } from './userjava1/userjava1.component';
import { Userc3Component } from './userc3/userc3.component';
import { Usercpp3Component } from './usercpp3/usercpp3.component';
import { Userjava3Component } from './userjava3/userjava3.component';
import { TermsandcondtionsComponent } from './termsandcondtions/termsandcondtions.component';
import { AddquestionsComponent } from './addquestions/addquestions.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


@NgModule({
  imports: [
    RouterModule.forRoot([{ path: '', redirectTo: "home/carousel", pathMatch: "full" },
    {
      path: "home", component: HomeComponent, children: [{ path: "carousel", component: CarouselComponent },
      { path: "register", component: RegisterComponent }, { path: "login", component: LoginComponent },
      { path: "about", component: AboutusComponent }, { path: "contactus", component: ContactusComponent },
      ]
    }, {
      path: "admin", component: AdminComponent, children: [
        { path: "userinfo", component: UserinfoComponent },
        {
          path: "uploads", component: UploadsComponent
        },
        { path: "userperform", component: UserperformComponent }, { path: "addquestions", component: AddquestionsComponent },
        {
          path: "begginer", component: AdminnavComponent, children: [{ path: "c", component: Adminc1Component },
          { path: "c++", component: Admincpp1Component },
          { path: "java", component: Adminjava1Component }]
        },
        {
          path: "medium", component: AdminnavComponent, children: [{ path: "c", component: Adminc2Component },
          { path: "c++", component: Admincpp2Component },
          { path: "java", component: Adminjava2Component }]
        },
        {
          path: "expert", component: AdminnavComponent, children: [{ path: "c", component: Adminc3Component },
          { path: "c++", component: Admincpp3Component },
          { path: "java", component: Adminjava3Component }]
        }, { path: '', redirectTo: "userinfo", pathMatch: "full" }
      ]
    },
    {
      path: "user", component: UserComponent, children: [
        { path: "userinfor", component: UserinforComponent },
        { path: "changepassword", component: ChangepasswordComponent },
        {
          path: "begginer", component: UsernavComponent, children: [{
            path: "c", component: Userc1Component
          },
          { path: "c++", component: Usercpp1Component },
          { path: "java", component: Userjava1Component }]
        },
        {
          path: "miduem", component: UsernavComponent, children: [{ path: "c", component: Userc2Component },
          { path: "c++", component: Usercpp2Component },
          { path: "java", component: Userjava1Component }]
        },
        {
          path: "expert", component: UsernavComponent, children: [{ path: "c", component: Userc3Component },
          { path: "c++", component: Usercpp3Component },
          { path: "java", component: Userjava3Component }]
        }, { path: '', redirectTo: "userinfor", pathMatch: "full" }
      ]
    }])
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
