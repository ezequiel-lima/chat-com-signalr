import { NameDialogComponent } from './../name-dialog/name-dialog.component';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Message } from '../../models/message';
import * as signalR from '@microsoft/signalr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  messages: Message[] = [];
  userName: string = '';

  messageControl = new FormControl('');
  connection = new signalR.HubConnectionBuilder().withUrl("https://localhost:7196/chat").build();

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) {
    this.openDialog();
  }

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(NameDialogComponent, {
      width: '250px',
      data: this.userName,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userName = result;
      this.startConnection();
      this.openSnackBar(result);
    });
  }

  openSnackBar(user: string) {
    const message = user == this.userName ? 'Você entou na sala' : `${user} acabou de entrar`
    this.snackBar.open(message, 'Fechar', {
      duration: 5000,
      horizontalPosition: 'start',
      verticalPosition: 'top'
    })
  }

  async startConnection() {
    this.connection.on("SendMessage", (user: string, message: string) => {
      this.messages.push({
        user: user,
        message: message,
      })
    });

    this.connection.on("NewUser", (user: string) => {
      this.openSnackBar(user);
    });

    await this.connection.on("PreviousMessages", (messages: Message[]) => {
      this.messages = messages;
    });

    await this.connection.start()
    .then(() => {
      this.connection.send("NewUser", this.userName, this.connection.connectionId)
    });
  }

  sendMessage() {
    this.connection.send("SendMessage", this.userName, this.messageControl.value)
    .then(() => {
      this.messageControl.setValue('');
    });
  }

}
