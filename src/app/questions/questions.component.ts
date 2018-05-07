import { Component, OnInit, Inject } from "@angular/core";
import { QuestionGen } from "../questionGen";
import { QuestionService } from "../questionservice.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  topicName: string;
  categoryId: number = 1 ;
  


  questionGen: QuestionGen[];

  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.route.queryParams.subscribe(params => {
      console.log("This is in question component" +params.topicName +this.categoryId);
      //this.categoryId = params.categoryId;
      this.topicName = params.topicName;
    });
    this.questionService.getQuestions(this.categoryId, this.topicName)
      .subscribe(questionGen => this.questionGen = questionGen);
  }

  goBack() {
    this.location.back();
  }
}