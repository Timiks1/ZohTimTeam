import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { XyzComponent } from './xyz/xyz.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FruitsComponent } from './fruits/fruits.component';
import{HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    
   
    XyzComponent,
             FruitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [XyzComponent]
})
export class AppModule { }
