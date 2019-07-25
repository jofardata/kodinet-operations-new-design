import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrivingLicenseListComponent } from './driving-license-list/driving-license-list.component';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatIconModule, MatButtonModule, MatNativeDateModule, MatListModule, MatToolbarModule, MatSidenavModule, MatDatepickerModule, MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';

const routes=[{
  path:'',
  component:DrivingLicenseListComponent
}]
@NgModule({
  declarations: [DrivingLicenseListComponent],
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
export class DrivingLicenseModule { }
