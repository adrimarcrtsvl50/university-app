import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-building-page',
  templateUrl: './building-page.component.html',
  styleUrls: ['./building-page.component.css']
})
export class BuildingPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Consultar() {
    this.router.navigate(['building-list']);
  }

  Crear() {
    this.router.navigate(['building-add']);
  }
}
