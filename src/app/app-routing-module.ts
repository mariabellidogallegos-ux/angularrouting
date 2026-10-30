import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicaComponent } from './components/musica-component/musica-component';
import { CineComponent } from './components/cine-component/cine-component';
import { HomeComponent } from './components/home-component/home-component';
import { NotFounComponent } from './components/not-foun-component/not-foun-component';
import { NumerosParesComponent } from './components/numeros-pares-component/numeros-pares-component';
import { TablaMultiplicarComponent } from './components/tabla-multiplicar-component/tabla-multiplicar-component';
import { SelecNumerosDoblesComponent } from './components/selec-numeros-dobles-component/selec-numeros-dobles-component';









const routes: Routes = [

  { path:"musica", component: MusicaComponent },
  { path: "cine", component: CineComponent },
  { path: "", component: HomeComponent },
  { path: "pares", component: NumerosParesComponent },
  { path: "tabla", component: TablaMultiplicarComponent },
  {path: "selectnumeros", component: SelecNumerosDoblesComponent },
  { path: "**", component: NotFounComponent },
  
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
