import {Component, ViewEncapsulation} from "@angular/core";
import {Pizza} from "./pizza";
import {PIZZAS} from "./data";
import {PizzaService} from "./pizza.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  private pizzas: Array<Pizza>;

  constructor(private pizzaService: PizzaService) {
    this.pizzas = PIZZAS;
  }
}
