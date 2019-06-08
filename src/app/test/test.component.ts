import { Component, OnInit ,TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  modalRef: BsModalRef;
  message: string;
  i:number;

  courses = [{
    title: "Angular",
    students: 3450,
    rating: 4.5762,
    price: 190.95,
    releaseDate: new Date(2019, 0, 25)
  },
  {
    title: "Symfony",
    students: 4450,
    rating: 5.5762,
    price: 191.95,
    releaseDate: new Date(2019, 0, 26)
  },
  {
    title: "java",
    students: 5450,
    rating: 6.5762,
    price: 192.95,
    releaseDate: new Date(2019, 0, 27)
  }
  ]

  
  constructor(private toastr: ToastrService,private modalService: BsModalService) { }
  
  delete(){
    this.courses.splice(this.i,1);
    this.modalRef.hide();
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  openModal(template: TemplateRef<any>,i:number) {
    this.i=i;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
 /* confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }*/
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }


  ngOnInit() {
  }

}
