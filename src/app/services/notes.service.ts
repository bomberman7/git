import { Injectable } from '@angular/core';
import {Note} from "../notes/note";


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  getNotes(): Note[] {
    return [
      new Note('Заметка 1','Текст 1'),
      new Note('Заметка 2','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
      new Note('Заметка 3','Текст 3'),
      new Note('Заметка 4','текст 4'),
    ]
  }

}
