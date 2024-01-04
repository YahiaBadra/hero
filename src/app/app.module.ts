import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardImageComponent } from './card-image/card-image.component';
import { FirstComponent } from './first/first.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateComponent } from './update/update.component';
import { AuthComponent } from './auth/auth.component';
import { SharedComponent } from './auth/shared/shared.component';
import { AlertComponent } from './auth/shared/alert/alert.component';
import { LoadingComponent } from './auth/shared/loading/loading.component';
import { PlaceholderComponent } from './auth/shared/placeholder/placeholder.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardImageComponent,
    FirstComponent,
    HeaderComponent,
    NotfoundComponent,
    UpdateComponent,
    AuthComponent,
    SharedComponent,
    AlertComponent,
    LoadingComponent,
    PlaceholderComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
