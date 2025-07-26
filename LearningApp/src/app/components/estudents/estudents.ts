import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';

@Component({
  selector: 'tr [estudents]',
  imports: [],
  templateUrl: './estudents.html',
})
export class StudentsComp {
  @Input()item!:Student

}
