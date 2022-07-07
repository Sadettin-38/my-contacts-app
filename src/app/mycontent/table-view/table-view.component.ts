import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/shared/phonebook.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})

export class TableViewComponent implements OnInit 
{
  constructor(private service: Service) { }

  ngOnInit()
  {
    this.getMembers();
    this.getContacts(2);
  }

  MembersList: any;

  getMembers()
  {
    this.service.getMembersList()
    .subscribe((x : any ) => { this.MembersList = x});
  }

  ContactsList: any;

  getContacts(id: number)
  {
    this.service.getContactsList(id)
    .subscribe((x : any ) => { this.ContactsList = x});
  }

  editMember(member: any)
  {
    this.service.updateMember(member);
    window.location.reload();
  }

  delMember(id: number)
  {
    this.service.deleteMember(id);
    window.location.reload();
  }
}
