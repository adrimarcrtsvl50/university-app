import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laboratory-page',
  templateUrl: './laboratory-page.component.html',
  styleUrls: ['./laboratory-page.component.css']
})
export class LaboratoryPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Consultar() {
    this.router.navigate(['laboratory-list']);
  }

  Crear() {
    this.router.navigate(['laboratory-add']);
  }

}
