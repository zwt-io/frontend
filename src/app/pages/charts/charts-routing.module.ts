import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts.component';
import { D3Component } from './d3/d3.component';

const routes: Routes = [{
  path: '',
  component: ChartsComponent,
  children: [{
    path: 'd3',
    component: D3Component,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule { }

export const routedComponents = [
  ChartsComponent,
  D3Component,
];
