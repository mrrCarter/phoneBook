import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  //provide the service
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  first_name:string;
  last_name:string;
  phone:string;

  //inject the dependency of contact service
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    //everytime component is load it will call the following component to retreive the data
    this.contactService.getContacts()
    //specify how we want the contacts to be saved as 
    .subscribe( contacts => 
    this.contacts = contacts);
  }

}
