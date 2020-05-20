import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DbmsComponent } from './dbms/dbms.component';
import { CompnetComponent } from './compnet/compnet.component';
import { CdsComponent } from './cds/cds.component';
import { AlgoComponent } from './algo/algo.component';
import { DmmComponent } from './dmm/dmm.component';
import { DeComponent } from './de/de.component';
import { TocComponent } from './toc/toc.component';
import { CompdComponent } from './compd/compd.component';
import { ComparchComponent } from './comparch/comparch.component';
import { OperatsysComponent } from './operatsys/operatsys.component';
import { CsefacultyComponent } from './csefaculty/csefaculty.component';
import { AdminstrationComponent } from './adminstration/adminstration.component';
import { BookspdfComponent } from './bookspdf/bookspdf.component';
import { VideosComponent } from './videos/videos.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { SearchComponent } from './search/search.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { EdituserComponent } from './edituser/edituser.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    DbmsComponent,
    CompnetComponent,
    CdsComponent,
    AlgoComponent,
    DmmComponent,
    DeComponent,
    TocComponent,
    CompdComponent,
    ComparchComponent,
    OperatsysComponent,
    CsefacultyComponent,
    AdminstrationComponent,
    BookspdfComponent,
    VideosComponent,
    AboutComponent,
    NewsComponent,
    SearchComponent,
    DeleteuserComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
         { path:'', component:LoginComponent },
         { path:'logout', component:LogoutComponent },
         { path:'dashboard', component:DashboardComponent },
         { path:'dbms', component:DbmsComponent },
         { path:'compnet', component:CompnetComponent },
         { path:'cds', component:CdsComponent },
         { path:'algo', component:AlgoComponent },
         { path:'de', component:DeComponent },
         { path:'dmm', component:DmmComponent },
         { path:'comparch', component:ComparchComponent },
         { path:'compd', component:CompdComponent },
         { path:'toc', component:TocComponent },
         { path:'operatsys', component:OperatsysComponent },
         { path:'about', component:AboutComponent },
         { path:'adminstration', component:AdminstrationComponent },
         { path:'bookspdf', component:BookspdfComponent },
         { path:'csefaculty', component:CsefacultyComponent },
         { path:'news', component:NewsComponent },
         { path:'search', component:SearchComponent },
         { path:'videos', component:VideosComponent },
         { path:'deleteuser', component:DeleteuserComponent},
         { path:'edituser', component:EdituserComponent},
         { path:'register', component:RegisterComponent }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
