import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { LearningServices } from '../../services/learning';
import { StudentsComp } from '../estudents/estudents';

@Component({
  selector: 'app-learning',
  imports: [StudentsComp],
  templateUrl: './learning.html',
  styleUrl: './learning.css'
})
export class Learning implements OnInit {

  learning!:Course;

  constructor(private courseService: LearningServices) { }
  ngOnInit(): void {
    this.learning=this.courseService.getLearning()
  
  }

}
