import { Component, OnInit } from '@angular/core';
import { AppClienteService } from './app-cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tareas: any[] = [];
  tarea = {
    id: null,
    nombre: '',
    completado: false
  }

  constructor( private appClienteService: AppClienteService){
    
  }

  ngOnInit(): void {
    this.getAll();      
  }

  getAll(){
    this.appClienteService.getAllTareas()
    .subscribe((data: any) => this.tareas = data);
  }

  save(){
    if(this.tarea.id){
      this.appClienteService.updateTarea(this.tarea.id, this.tarea)
      .subscribe(()=> this.getAll()); //cargamos nuevamente las tareas
    }else{
      this.appClienteService.createTarea(this.tarea)
      .subscribe(()=> this.getAll()); //cargamos nuevamente las tareas
    }
    

    this.tarea = {
    id: null,
    nombre: '',
    completado: false}
  }

  edit(tarea: any){
    this.tarea = {...tarea};
  }

  delete(tarea: any){
    this.appClienteService.deleteTarea(tarea.id)
    .subscribe(() => this.getAll());
  }


}
