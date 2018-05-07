import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { QuestionGen } from "./questionGen";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

@Injectable()
export class QuestionService {
  constructor(private http: HttpClient) {}

  questionGenUrl = "http://localhost:8080/api/v1/question-generator/category";
  topicsUrl = "http://localhost:8080/api/v1/question-generator/category";
  questionsUrl = "http://localhost:8080/api/v1/question-generator/category";

  getCategories(): Observable<QuestionGen[]> {
    return this.http.get<QuestionGen[]>(this.questionGenUrl);
  }

  getTopics(categoryId: number): Observable<QuestionGen[]> {
    const getUrl = `${this.topicsUrl}/${categoryId}/topics`;
    return this.http.get<QuestionGen[]>(getUrl);
  }

  getQuestions(categoryId: number, topicName: string): Observable<QuestionGen[]> {
    const getUrl = `${this.questionsUrl}/${categoryId}/${topicName}/questions`;
    return this.http.get<QuestionGen[]>(getUrl);
  }
}
