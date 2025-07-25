import { Injectable } from '@angular/core';
import { Course } from '../model/Course';
import { learningData } from '../data/learning.data';

@Injectable({
  providedIn: 'root'
})
export class LearningServices {
  private learning:Course = learningData;
  constructor() { }

  getLearning():Course{
    return this.learning;
  }
}
