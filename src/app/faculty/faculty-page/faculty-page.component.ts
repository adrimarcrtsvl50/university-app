import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-page',
  templateUrl: './faculty-page.component.html',
  styleUrls: ['./faculty-page.component.css']
})
export class FacultyPageComponent {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Consultar() {
    this.router.navigate(['faculty-list']);
  }

  Crear() {
    this.router.navigate(['faculty-add']);
  }

}
