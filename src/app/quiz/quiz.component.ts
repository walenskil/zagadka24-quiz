import { Component, OnDestroy } from '@angular/core';
import { QUIZ_QUESTIONS } from './quiz-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnDestroy {
  private currentQuestionIndex = 0;
  private wrongAnswerTimeout?: ReturnType<typeof setTimeout>;

  constructor(private router: Router) {}

  answer = '';
  showWrongAnswer = false;

  get currentQuestion() {
    return QUIZ_QUESTIONS[this.currentQuestionIndex];
  }

  get isComplete(): boolean {
    return this.currentQuestionIndex >= QUIZ_QUESTIONS.length;
  }

  onKlotskiComplete(event: boolean): void {
    if (event) this.answer = 'ok';
  }

  checkAnswer(): void {
    if (!this.answer.trim() || this.isComplete) {
      return;
    }

    const normalizedAnswer = this.normalize(this.answer);
    const acceptedAnswers = this.currentQuestion.answers.map((item) =>
      this.normalize(item),
    );

    if (acceptedAnswers.includes(normalizedAnswer)) {
      this.clearWrongAnswerTimeout();
      this.showWrongAnswer = false;
      this.answer = '';
      this.currentQuestionIndex += 1;
      this.scrollTop()
      if (this.currentQuestionIndex == 10) this.router.navigate(['/koniec']);
      return;
    }

    this.showWrongAnswer = true;
    this.clearWrongAnswerTimeout();
    this.wrongAnswerTimeout = setTimeout(() => {
      this.showWrongAnswer = false;
      this.wrongAnswerTimeout = undefined;
    }, 5000);
  }

  scrollTop() {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    }, 100);
  }

  ngOnDestroy(): void {
    this.clearWrongAnswerTimeout();
  }

  private normalize(value: string): string {
    return value
      .trim()
      .toLocaleLowerCase('pl-PL')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ');
  }

  private clearWrongAnswerTimeout(): void {
    if (this.wrongAnswerTimeout) {
      clearTimeout(this.wrongAnswerTimeout);
      this.wrongAnswerTimeout = undefined;
    }
  }
}
