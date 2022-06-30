import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

// layouts
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';

// admin views
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { MapsComponent } from './views/admin/maps/maps.component';
import { SettingsComponent } from './views/admin/settings/settings.component';
import { TablesComponent } from './views/admin/tables/tables.component';

// auth views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';

// no layouts views
import { IndexComponent } from './views/index/index.component';
import { LandingComponent } from './views/landing/landing.component';
import { ProfileComponent } from './views/profile/profile.component';
import {MontajesComponent} from './views/montajes/montajes.component';
import {SistemasCalidadComponent} from './views/sistemas-calidad/sistemas-calidad.component';
import {ControlAseguramientoComponent} from './views/control-aseguramiento/control-aseguramiento.component';
import {SoporteTecnicoComponent} from './views/soporte-tecnico/soporte-tecnico.component';
import {PruebasComponent} from './views/pruebas/pruebas.component';
import {AlquilerComponent} from './views/alquiler/alquiler.component';

const routes: Routes = [
  // admin views
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, ...canActivate(() => redirectUnauthorizedTo(['/auth/login']))},
      { path: 'settings', component: SettingsComponent, ...canActivate(() => redirectUnauthorizedTo(['/auth/login'])) },
      { path: 'tables', component: TablesComponent, ...canActivate(() => redirectUnauthorizedTo(['/auth/login'])) },
      { path: 'maps', component: MapsComponent, ...canActivate(() => redirectUnauthorizedTo(['/auth/login'])) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  // auth views
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: 'servicios',
    children:[
      { path: 'montajes', component: MontajesComponent },
      { path: 'sistemas-calidad', component: SistemasCalidadComponent },
      { path: 'control-aseguramiento', component: ControlAseguramientoComponent },
      { path: 'soporte-tecnico', component: SoporteTecnicoComponent },
      { path: 'pruebas', component: PruebasComponent },
      { path: 'alquiler', component: AlquilerComponent },
    ],
  },
  // no layout views
  { path: 'profile', component: ProfileComponent },
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
