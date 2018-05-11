import { Component, OnInit } from "@angular/core";
import { QuestionService } from "../questionservice.service";
import { QuestionGen } from "../questionGen";

@Component({
  selector: "app-topic-dialog",
  templateUrl: "./topic-dialog.component.html",
  styleUrls: ["./topic-dialog.component.css"]
})
export class TopicDialogComponent implements OnInit {
  questionGen;
  topicId: number;
  topicName: string;
  topicImage: string;

  constructor(private questionService: QuestionService) {}

  ngOnInit() {}

  onSubmit() {
    let question = {
      topic: [
        {
          topicId: `${this.topicId}`,
          topicName: `${this.topicName}`,
          topicImage: this.topicImage
        }
      ]
    };
    this.questionService.addTopic(question).subscribe(questionGen => {
      this.questionGen.push(questionGen), alert("Topic added successfully");
    });
  }
}
