import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  notes: any[];
  noteNote: string = "";
  editMode: boolean = false;
  editId: number=0;
  constructor(public database: DatabaseService) {
    this.database.createDatabase().then(()=>{
      this.getNotes();
    });
  }

  ngOnInit() {
  }

  addNote(){
    if (!this.noteNote.length){
      alert("Porfavor Ingresa una Nota");
      return;
    }
    if (this.editMode){
      this.database.editNote(this.noteNote, this.editId).then((data)=> {
        this.noteNote = ''
        this.editMode=false,
        this.editId=0,
        alert(data);
        this.getNotes();
      });
    }else{
      this.database.AddNote(this.noteNote).then((data)=>{
        this.noteNote="";
        alert(data);
        this.getNotes();
      });
    }
  
  }

  getNotes(){
    this.database.getNote().then((data)=> {
      this.notes = [];
      if (data.rows.length > 0){
        for (var i = 0; i < data.rows.length; i++){
          this.notes.push(data.rows.item(i));
        }
      }
    });
  }

  deleteNote(id: number){
    this.database.deleteNote(id).then((data)=>{
      alert(data);
      this.getNotes();
    });
  }

  editNote(note:any){
    this.editMode = true;
    this.noteNote = note.note;
    this.editId = note.id;
  }

}
