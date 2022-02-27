import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Note} from "../notes/note";
import {NotesService} from "../services/notes.service";

@Component({
  selector: 'app-note',
  templateUrl: 'item.component.html'
})

export class ItemComponent {
  title = 'Мои заметки';

  notes: Note[]=[];
  currentTitle!: string;
  currentText!: string;
  click: boolean=true;

  id!: number;
  private subscription: Subscription;
  private noteService: any;
  constructor(private activateRoute: ActivatedRoute, noteService: NotesService){

    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);

    this.noteService = noteService;
    this.notes=this.noteService.getNotes();

    this.currentTitle=this.notes[this.id-1].noteTitle;
    this.currentText=this.notes[this.id-1].noteText;
  }

}
