import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {


  databaseObj: SQLiteObject;
  tables= {notes:"notes"}

  constructor(private sqlite: SQLite) { }
  
  async createDatabase(){
    await this.sqlite.create({
      name: "registrapp",
      location:"default",
    }).then((db: SQLiteObject) =>{
      this.databaseObj = db;
    }).catch((e)=>{
      alert("Error creando la base de datos :c " + JSON.stringify(e));
    });

    await this.createTables();

  }

    async createTables() {
      await this.databaseObj.executeSql(
        `CREATE TABLE IF NOT EXISTS ${this.tables.notes} (id INTEGER PRIMARY KEY AUTOINCREMENT, note VARCHAR(255) NOT NULL UNIQUE)`,
        []
      );
  }

  async AddNote(note: string){
    return this.databaseObj.executeSql(
      `INSERT INTO ${this.tables.notes} (note) VALUES ('${note}')`,[]
    ).then(()=>{
      return "Nota Añadida";
    }).catch((e)=>{
      if(e.code === 6){
        return "Esta nota ya existe :o "
      }
      return "ERROR AL AGREGAR LA NOTA :0 " + JSON.stringify(e);
    });
  }

  async getNote(){
    return this.databaseObj.executeSql(
      `SELECT * FROM ${this.tables.notes} ORDER BY note ASC`,
        []
    ).then((res)=>{
      return res;
    }).catch((e)=> {
      return "ERROR AL BUSCAR LA NOTA" +JSON.stringify(e);
    });
  }

  async deleteNote(id: number){
    return this.databaseObj.executeSql(
      `DELETE FROM ${this.tables.notes} WHERE id = ${id}`,[]
    ).then(()=>{
      return "NOTA ELIMINADA";
    }).catch((e)=> {
      return "ERROR AL INTENTAR BORRAR LA NOTA" + JSON.stringify(e);
    });
  }

  async editNote(note: string, id:number){
    return this.databaseObj.executeSql(
      `UPDATE ${this.tables.notes} SET note = '${note}' WHERE id = ${id}`,[]
    ).then(()=>{
      return "NOTA ACTUALIZADA"
    }).catch((e)=> {
      if (e.code === 6){
        return "ESTA NOTA YA EXISTE";
      }
      return"ERROR AL ACTUALIZAR LA NOTA :c " + JSON.stringify(e);
    });
  }
}
