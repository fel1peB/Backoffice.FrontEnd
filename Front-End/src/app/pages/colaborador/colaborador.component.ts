import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/core/models/Employee';
import { Skill } from 'src/app/core/models/Skill';
import { Technology } from 'src/app/core/models/Technology';
import { EmployeeService} from '../../core/component/service/EmployeeService'

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})


export class ColaboradorComponent implements OnInit {
  formTecnology:FormGroup;
  errorMessage: string;
  public listEmployee: Employee[];
  public listTecnology: Technology[];
  public listSkill: Skill[];
  @ViewChild('modalDetalhesTechnology') modalDetalhesTechnology: HTMLElement;
  @ViewChild('modalDetalhesSkills') modalDetalhesSkills: HTMLElement;
  
 

  constructor(private modalService: NgbModal, private fb: FormBuilder, private employeeService: EmployeeService) {
    this.createForm();
    this.getEmployeeList();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.formTecnology = this.fb.group({
      name:['', Validators.required],
      timeWorked:['', Validators.required]
    });
  }

  openModal(content: any) {
    this.modalService.dismissAll();
    this.modalService.open(content.open,
      {
        ariaLabelledBy: 'modal-basic-title',
        size: content.modalSize,
        animation: true
      }).result.then((result) => { }, (reason) => { });
  }

  openModalTecnology(tecnologys: Technology[]){
    this.modalService.dismissAll();
    this.listTecnology = tecnologys;
    this.modalService.open(this.modalDetalhesTechnology, {size: 'lg', animation: true});
  }

  openModalSkill(skills: Skill[]){
    this.modalService.dismissAll();
    this.listSkill = skills;
    this.modalService.open(this.modalDetalhesSkills, {size: 'lg', animation: true});
  }

  salvarTecnology(){
    if(this.formTecnology.dirty && this.formTecnology.valid)
    {}
  }

  getEmployeeList()
  {
    this.employeeService.get().subscribe(
      s=> this.listEmployee = s,
      e=> this.errorMessage = e);  
  }

}