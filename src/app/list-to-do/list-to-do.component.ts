import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {

  modalRef: BsModalRef;
  message: string;
  isPrimary = true;
  todo = "ToDo List";
  i: number;

  toDOs = [ ]


  doneS = [{
    description: "description4",
    dateAjout: new Date(),
    dateFin: new Date()

  },
  {
    description: "description5",
    dateAjout: new Date(),
    dateFin: new Date()

  },
  {
    description: "description6",
    dateAjout: new Date(),
    dateFin: new Date()

  }
  ]



  constructor(private toastr: ToastrService, private ts: TodoService, private modalService: BsModalService) { }




  showSuccess() {
    this.toastr.success('suppression avec succes', 'supprimé');
  }

  openModal(template: TemplateRef<any>, i: number) {
    this.i = i;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  openModalDones(template2: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template2, { class: 'modal-sm' });
  }

  deleteToDos(i) {
    this.toDOs.splice(i, 1);
    this.modalRef.hide();
    this.showSuccess();


  }


  deleteDones(i) {
    this.doneS.splice(i, 1);
    this.modalRef.hide();
    this.showSuccess();


  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  addToDone(i, toDOs) {

    this.doneS.push(toDOs[i]);
    this.toDOs.splice(i, 1);
  }

  ngOnInit(){
    const helper = new JwtHelperService();
    let token = localStorage.getItem('token');
    const decodedToken = helper.decodeToken(token);
    let _creator= decodedToken._id;
    console.log(_creator);
    
    this.ts.ListTodos({_creator}).subscribe(
      res => {
        console.log(res);
        this.toDOs = res.todos;
      },
      err => {
        console.log(err);
      }
    )

  }
}
