import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from '../../service/service.service';
import { Laboratorio } from 'src/app/dtos/Laboratorio';


@Component({
  selector: 'app-laboratory-list',
  templateUrl: './laboratory-list.component.html',
  styleUrls: ['./laboratory-list.component.css']
})
export class LaboratoryListComponent implements OnInit {

  laboratorios:Laboratorio[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getLaboratorios().subscribe(data => {
      this.laboratorios=data;
    })
  }

  Editar(laboratorio: Laboratorio): void {
    localStorage.setItem("id", laboratorio.id.toString());
    this.router.navigate(["laboratory-edit"]);
  }

  Eliminar(laboratorio: Laboratorio) {
    this.service.deleteLaboratorio(laboratorio).subscribe(data => {
      this.laboratorios=this.laboratorios.filter(l=>l!==laboratorio);
    });
  }

}
