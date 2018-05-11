import { Component, OnInit, Inject } from "@angular/core";
import { QuestionGen } from "../questionGen";
import { QuestionService } from "../questionservice.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { MatDialog } from '@angular/material';
import { TopicDialogComponent } from "../topic-dialog/topic-dialog.component";

@Component({
  selector: "app-all-topics-in-category",
  templateUrl: "./all-topics-in-category.component.html",
  styleUrls: ["./all-topics-in-category.component.css"]
})
export class AllTopicsInCategoryComponent implements OnInit {
  categoryId: number;
  questionGen: QuestionGen[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private questionService: QuestionService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.getTopics();
  }

  getTopics() {
    this.route.queryParams.subscribe(params => {
      this.categoryId = +params.categoryId;
    });
    this.questionService.getTopics(this.categoryId).subscribe(questionGen => {
      this.questionGen = questionGen;
    });
  }

  goBack() {
    this.location.back();
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(TopicDialogComponent, {
      width: '500px',
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
