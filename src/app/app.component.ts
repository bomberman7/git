import { Component } from '@angular/core';
import {NotesService} from "./services/notes.service";
import {Note} from "./notes/note";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NotesService]
})
export class AppComponent {

  title = 'Мои заметки';

  notes: Note[]=[];
  number!: number;
  currentTitle!: string;
  currentText!: string;

  constructor(private noteService: NotesService) {
    this.notes=this.noteService.getNotes();

  }

  // addNumber(): void{
  //   this.notes.push(new Note(this.number))
  //   this.clearNumber();
  // }

  clearNumber(): void {
    //this.number=null;
  }

  showText(i: number) {
    this.currentTitle=this.notes[i].noteTitle;
    this.currentText=this.notes[i].noteText;

  }

  saveNote() {
    this.notes.push(new Note('1', 'sdfsdf'));
  }

  addNote() {
    this.currentTitle;
    this.currentText='Введите текст заметки';
  }


}
