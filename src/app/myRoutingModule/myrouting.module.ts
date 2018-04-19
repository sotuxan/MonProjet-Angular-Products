import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { ProductsDetailsComponent } from '../components/products-details/products-details.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routerTable = [
  { path: 'list', component: ProductsListComponent},
  { path: 'product/:id', component: ProductsDetailsComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routerTable)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class MyRoutingModule { }
