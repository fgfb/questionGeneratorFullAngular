import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { QuestionGen } from "./questionGen";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

@Injectable()
export class QuestionService {
  constructor(private http: HttpClient) {}

  url = "http://localhost:8080/api/v1/question-generator/category";
  
  getCategories(): Observable<QuestionGen[]> {
    return this.http.get<QuestionGen[]>(this.url);
  }

  addTopic(questionGen): Observable<QuestionGen[]>{
    const categoryId = 1;
    const getUrl = `${this.url}/${categoryId}/topics`;
    return this.http.put<QuestionGen[]>(getUrl,questionGen);
  }

  getTopics(categoryId: number): Observable<QuestionGen[]> {
    const getUrl = `${this.url}/${categoryId}/topics`;
    return this.http.get<QuestionGen[]>(getUrl);
  }

  addQuestion(questionGen): Observable<QuestionGen[]>{
    const categoryId = 1;
    const topicName = "chemistry";
    const getUrl = `${this.url}/${categoryId}/${topicName}/questions`;
    return this.http.put<QuestionGen[]>(getUrl,questionGen);
  }

  getQuestions(categoryId: number, topicName: string): Observable<QuestionGen[]> {
    const getUrl = `${this.url}/${categoryId}/${topicName}/questions`;
    return this.http.get<QuestionGen[]>(getUrl);
  }
}
