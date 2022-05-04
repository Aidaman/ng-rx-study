import {Component, Input, OnInit} from '@angular/core';
import {IBackendErrors} from "../types/backend-errors.interface";

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessagesComponent implements OnInit{
  @Input() backendErrors!: IBackendErrors | null;

  public errorMessages!: string[];

  ngOnInit(): void {
    if (this.backendErrors != null){
      this.errorMessages = Object.keys(this.backendErrors).map(
        (name: string) => {
          return `${name} with something ¯\\_(ツ)_/¯`
      })
    }
  }
}
