import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Laboratorio } from 'src/app/dtos/Laboratorio';

@Component({
  selector: 'app-laboratory-edit',
  templateUrl: './laboratory-edit.component.html',
  styleUrls: ['./laboratory-edit.component.css']
})
export class LaboratoryEditComponent implements OnInit {

  laboratorio:Laboratorio = new Laboratorio();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");
    this.service.getLaboratorioPorId(+id).subscribe(data => {
      this.laboratorio=data;
    });
  }

  Actualizar(laboratorio: String) {
    this.laboratorio.name=laboratorio;
    this.service.updateLaboratorio(this.laboratorio).subscribe(data => {
      this.router.navigate(["laboratory-list"]);
    })
  }

}
