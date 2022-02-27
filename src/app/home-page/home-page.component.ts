import { Component, OnInit } from '@angular/core';
import {Note} from "../notes/note";
import {NotesService} from "../services/notes.service";

// @ts-ignore
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  title = 'Мои заметки';
  notes: Note[]=[];
  currentTitle!: string;
  currentText!: string;
  click: boolean=true;
  id: number | undefined;

  constructor(private noteService: NotesService) {
    this.notes=this.noteService.getNotes();
  }

  showText(i: number) {
    this.currentTitle=this.notes[i].noteTitle;
    this.currentText=this.notes[i].noteText;
    this.id = i+1;
    }

  saveNote() {
    this.notes.push(new Note(this.currentTitle, this.currentText));
    this.currentTitle='';
    this.currentText='';
  }

  clearInput() {
    this.currentTitle='';
    this.currentText='';
  }
}
