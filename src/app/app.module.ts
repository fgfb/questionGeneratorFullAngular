import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { QuestionService } from "./questionservice.service";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule, MatIconModule, MatInputModule } from "@angular/material";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatSidenavModule } from "@angular/material";
import { AllTopicsInCategoryComponent } from "./all-topics-in-category/all-topics-in-category.component";
import { QuestionsComponent } from "./questions/questions.component";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { TopicDialogComponent } from './topic-dialog/topic-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,

    AllTopicsInCategoryComponent,
    QuestionsComponent,
    TopicDialogComponent,
    QuestionDialogComponent,
    QuestionDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule
  ],
  entryComponents: [TopicDialogComponent, QuestionDialogComponent],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
