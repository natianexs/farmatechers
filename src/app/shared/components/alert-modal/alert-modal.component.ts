import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrl: './alert-modal.component.scss'
})
export class AlertModalComponent {
  dismissible = true;
  @Input() type!:string;
  @Input() message!:string;

}
