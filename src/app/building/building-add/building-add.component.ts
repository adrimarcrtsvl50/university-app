import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Edificio } from 'src/app/dtos/Edificio';


@Component({
  selector: 'app-building-add',
  templateUrl: './building-add.component.html',
  styleUrls: ['./building-add.component.css']
})
export class BuildingAddComponent implements OnInit {

  edificio:Edificio = new Edificio();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(edificio:String) {
    this.edificio.name=edificio;
    this.service.createEdificios(this.edificio).subscribe(data => {
      alert("Edificio creado con exito!");
      this.router.navigate(["building-list"]);
    })
  }

}