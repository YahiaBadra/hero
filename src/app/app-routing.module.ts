import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CardImageComponent } from './card-image/card-image.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateComponent } from './update/update.component';
import { AuthComponent } from './auth/auth.component';
import { FirstComponent } from './first/first.component';
import { AuthGuard } from './auth/shared/auth.guard';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'add', component: NavComponent, canActivate: [AuthGuard] },
  { path: 'list', component: CardImageComponent, canActivate: [AuthGuard] },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'first', component: FirstComponent },
  { path: 'contact', component: ContactComponent },

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
