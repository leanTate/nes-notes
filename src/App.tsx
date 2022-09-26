import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
type Note={
  id : number,
  title: string;
  body: string;
  lastEdited: string;
  archived: boolean;
  categories: string[];
}

type NoteCardProps={
  note: Note;
  onArchive:(id:Note['id'])=>void;
}

function NoteCard({note,onArchive}:NoteCardProps) {
  return(
    <div className='nes-container with-title is-rounded is-dark' style={{display:'flex',margin:'20px'}}>
    <div style={{marginRight:'20px'}}>
      <h1 className='title' style={{color:'white'}}>{note.title}</h1>
      <p style={{fontSize:'15px'}}>last Edited:{note.lastEdited}</p>
    </div>
    <div style={{display:'flex',gap:'20px',marginLeft:'40px',alignItems:'center',justifyContent:'center'}}>
      <button  onClick={()=>onArchive(note.id)} className='nes-btn'>archive</button>
      <button className='nes-btn is-primary'>edit</button>
      <button className='nes-btn is-error'>delete</button>
    </div>
  </div>
  )
  
}

const Notes = [
  {id:1,title: 'note 1', body: 'note 1 body', lastEdited: '2021-01-01', archived: false , categories: ['cat1', 'cat2']},
  {id:2,title: 'note 2', body: 'note 2 body', lastEdited: '2021-01-01', archived: false, categories: ['cat1', 'cat2']}, 
  {id:3,title: 'note 3', body: 'note 3 body', lastEdited: '2021-01-01', archived: false, categories: ['cat1', 'cat2']},
]

function App() {
  const [notes, setNotes] = useState<Note[]>(()=>Notes)

  function handleArchive(id:Note['id']){
    setNotes(notes.map(note=>note.id!=id?{...note}:{...note,archived:!note.archived}))
  }

  return (
    <div className="App">
      <h1 style={{color:'white'}}>my Notes</h1>
      <button className='nes-btn is-warning'>Create Note</button>
      {Notes.map(note =>note.archived == true?null:<NoteCard onArchive={handleArchive} key={note.id} note={note}/>)}
    </div>
  )
}

export default App
