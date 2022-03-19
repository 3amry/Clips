import { ModalService } from './../../services/modal.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(
    public modal: ModalService,
    public auth: AuthService,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {}

  openModal($event: Event, id: string) {
    $event.preventDefault();

    this.modal.toggleModal(id);
  }

  async logout($event: Event) {
    $event.preventDefault();

    await this.afAuth.signOut();
  }
}
