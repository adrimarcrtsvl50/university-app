import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Edificio } from 'src/app/dtos/Edificio';

@Component({
  selector: 'app-building-edit',
  templateUrl: './building-edit.component.html',
  styleUrls: ['./building-edit.component.css']
})
export class BuildingEditComponent implements OnInit {

  edificio:Edificio = new Edificio();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");
    this.service.getEdificioPorId(+id).subscribe(data => {
      this.edificio=data;
    });
  }

  Actualizar(edificio: String) {
    this.edificio.name=edificio;
    this.service.updateEdificio(this.edificio).subscribe(data => {
      //this.edificio=data;
      alert("Edificio actualizado con exito!");
      this.router.navigate(["building-list"]);
    })
  }

}
