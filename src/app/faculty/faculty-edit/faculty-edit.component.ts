import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Facultad } from 'src/app/dtos/Facultad';

@Component({
  selector: 'app-faculty-edit',
  templateUrl: './faculty-edit.component.html',
  styleUrls: ['./faculty-edit.component.css']
})
export class FacultyEditComponent implements OnInit {

  facultad:Facultad = new Facultad();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");
    this.service.getFacultadPorId(+id).subscribe(data => {
      this.facultad=data;
    });
  }

  Actualizar(facultad: String) {
    this.facultad.name=facultad;
    this.service.updateFacultad(this.facultad).subscribe(data => {
      //this.facultad=data;
      alert("Facultad actualizada con exito!");
      this.router.navigate(["faculty-list"]);
    })
  }

}
