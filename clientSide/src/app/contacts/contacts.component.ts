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

  //add contact method
  addContact() {
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    }
    //provide this created contact to the service
    this.contactService.addContact(newContact)
      .subscribe(contact => {
        this.contacts.push(contact);
      })
  }

  //the delete contact method
  deleteContact(id:any) {
    var contacts = this.contacts;
    this.contactService.deleteContact(id)
      .subscribe(data =>{
        if(data.n === 1)//if delete operation is successful or true
        {
          for(var i = 1; i<contacts.length; i++){
            if(contacts[i]._id === id){
              contacts.splice(i,1);
            }
          }
        }
      })
  }

  ngOnInit() {
    //everytime component is load it will call the following component to retreive the data
    this.contactService.getContacts()
    //specify how we want the contacts to be saved as 
      .subscribe( contacts => 
    this.contacts = contacts);
  }

}
