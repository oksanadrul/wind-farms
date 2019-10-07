import {
  MatButtonModule,
  MatSidenavModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatTableModule,
  MatSelectModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule
  ],
})
export class MaterialModule {}
