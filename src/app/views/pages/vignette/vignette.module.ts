import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VignetteComponent } from './vignette-list/vignette-list.component';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatIconModule, MatButtonModule, MatNativeDateModule, MatListModule, MatToolbarModule, MatSidenavModule, MatDatepickerModule, MatSortModule, MatTableModule, MatPaginatorModule } from '@angular/material';
const routes=[
  {
    path:'',
    component:VignetteComponent
  }
]
@NgModule({
  declarations: [VignetteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatTableModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class VignetteModule { }
