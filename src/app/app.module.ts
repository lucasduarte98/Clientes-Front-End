import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseListComponent } from './case-list/case-list.component';
import { from } from 'rxjs';
import { CreateCaseComponent } from './create-case/create-case.component';
import { FormsModule} from '@angular/forms';
import { UpdateCaseComponent } from './update-case/update-case.component'
import { NgxMaskModule, IConfig } from 'ngx-mask'

@NgModule({
  declarations: [
    AppComponent,
    CaseListComponent,
    CreateCaseComponent,
    UpdateCaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
