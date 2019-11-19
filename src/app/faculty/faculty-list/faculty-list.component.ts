import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from '../../service/service.service';
import { Facultad } from 'src/app/dtos/Facultad';


@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css']
})
export class FacultyListComponent implements OnInit {

  facultades:Facultad[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getFacultades().subscribe(data => {
      this.facultades=data;
    })
  }

  Editar(facultad: Facultad): void {
    localStorage.setItem("id", facultad.id.toString());
    this.router.navigate(["faculty-edit"]);
  }

  Eliminar(facultad: Facultad) {
    this.service.deleteFacultad(facultad).subscribe(data => {
      this.facultades=this.facultades.filter(f=>f!==facultad);
      alert("Facultad eliminada...")
    });
  }

}
