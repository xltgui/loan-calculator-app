import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from "./calculator/calculator";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calculator],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'loan-calculator';
}
