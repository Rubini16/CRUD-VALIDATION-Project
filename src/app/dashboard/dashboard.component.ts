import { Component, OnInit, ViewChild } from '@angular/core';

class Registration {
  constructor(
    public fullName: string = '',
    public email: string = '',
    public phone: number,
    public company: string = '',
    public address: string = 'Select country'
  ) {}
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  registrations: Registration[] = [];
  model: any = {};
  regModel: Registration;
  showNew: Boolean = false;
  submitType = 'Register';
  selectedRow: number;
  userName = '';
  showTable: Boolean = false;
  registeredUsers = '';
  dateNow: Date = new Date();

  @ViewChild('closebutton') closebutton;

  constructor() {
    this.registrations.push(
      new Registration(
        'Johan Peter',
        'johan@gmail.com',
        9765432110,
        'ABC Private Ltd.',
        '322 Cedar Cir, Streamwood, IL, 60107'
      )
    );
    this.registrations.push(
      new Registration(
        'Mohamed Tariq',
        'tariq@gmail.com',
        96754323110,
        'DEF Private Ltd.',
        '324 Cedar Cir, Streamwood, IL, 60107'
      )
    );
    this.registrations.push(
      new Registration(
        'Nirmal Kumar',
        'nirmal@gmail.com',
        96754323110,
        'GHI Private Ltd.',
        '327 Cedar Cir, Streamwood, IL, 60107'
      )
    );
  }

  ngOnInit() {}

  onSubmit() {
    if (this.submitType === 'Register') {
    this.registrations.push(this.model);
    this.closebutton.nativeElement.click();
  } else {
      this.registrations[this.selectedRow].fullName = this.model.fullName;
      this.registrations[this.selectedRow].email = this.model.email;
      this.registrations[this.selectedRow].phone = this.model.phone;
      this.registrations[this.selectedRow].company = this.model.company;
      this.registrations[this.selectedRow].address = this.model.address;
    }
    this.showNew = false;
  }

  onEdit(index: number) {
    this.selectedRow = index;
    this.submitType = 'Update';
    this.model = Object.assign({}, this.registrations[this.selectedRow]);

    this.showNew = true;
  }
  getTableData(reg: any, index: number) {
    console.log(reg);
    this.userName = reg.fullName;
    this.showTable = true;
    this.registeredUsers = reg;
    this.selectedRow = index;
    this.model = Object.assign({}, this.registrations[this.selectedRow]);
  }

  onDelete(index: number) {
    this.registrations.splice(index, 1);
  }
  onClose() {
    this.showNew = false;
  }
}
