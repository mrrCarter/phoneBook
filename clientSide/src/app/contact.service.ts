import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Contact} from './contact';
import 'rxjs/add/operator/map';



@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  //retreiving ContactService
  getContacts() {
    return this.http.get('http://localhost:3000/api/contacts')
    .map(res => res.json());
  }

  //add contact method
  addContact(newContact) {
    console.log("ContactsComponent\n First: "+ newContact.first_name + "\nLast:" + newContact.last_name);
    var headers = new Headers()
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact, {headers:headers})
    .map(res => res.json());
  }

  //delete method
  deleteContact(id) {
    return this.http.delete(`http://localhost:3000/api/contact/`+id)
    .map(res => res.json());
  }



}
