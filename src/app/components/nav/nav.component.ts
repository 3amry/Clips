import { ModalService } from './../../services/modal.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(public modal: ModalService, public auth: AuthService) {}

  ngOnInit(): void {}

  openModal($event: Event, id: string) {
    $event.preventDefault();

    this.modal.toggleModal(id);
  }
}
