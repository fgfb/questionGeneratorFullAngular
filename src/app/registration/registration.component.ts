import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { QuestionService } from "../questionservice.service";
import { Router } from "@angular/router";
import { empty } from "rxjs/Observer";
import { QuestionGen } from "../questionGen";
@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  categories: QuestionGen[];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private questionService: QuestionService
  ) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.questionService
      .getCategories()
      .subscribe(data => (this.categories = data));
  }
}
