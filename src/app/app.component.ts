import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterModule } from "./counter/counter.module";
import { HeroesModule } from "./heroes/heroes.module";
import { DbzModule } from "./dbz/dbz.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterModule, HeroesModule, DbzModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-bases';
}
