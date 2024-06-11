import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio-2022';

  constructor(private router: Router) {
    if(this.router.url === '/'){
      router.navigateByUrl('./');
    }
  }

  current = false;

  updateSelection(id: string) {
    if (id === 'a1') {
      this.current = false;
      return;
    }

    this.current = true;
  }
}

