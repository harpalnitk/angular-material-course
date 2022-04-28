import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

const SIMPLE_TEXT = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ";
@Component({
  selector: "create-course-step-1",
  templateUrl:"create-course-step-1.component.html",
  styleUrls: ["create-course-step-1.component.scss"]
})
export class CreateCourseStep1Component {

  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    releasedAt: [new Date(1990,3,1), Validators.required],
    category: ['BEGINNER', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: [SIMPLE_TEXT, [Validators.required, Validators.minLength(3)]]
  });

  // Validators.requiredTrue makes checkboxes mandatory


  //to highlight a particular Date in a calendar
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate,view)=>{
    const date = cellDate.getDate();
    if(view== 'month'){
      return (date == 1) ? 'highlight-date second-css-class' : '';
    }
    //return value when we are not on monthly view
    return "";
  }

  constructor(private fb: FormBuilder) {

  }

  get courseTitle() {
    return this.form.controls['title'];
  }

}
