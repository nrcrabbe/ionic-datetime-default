import { NgModule }      from '@angular/core';
import { DateTime } from './datetime/datetime;
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [
    IonicModule.forRoot(DateTime)
  ],
  declarations: [
    DateTime
  ],
  exports: [
    DateTime
  ]
})
export class DateTimeModule {}
