/* eslint-disable react/prop-types */
import Button from "./Button";
export default function Notes({ notes, onClick,  }) {
  console.log(typeof notes);
  
  return (
    <div>
      {[...notes].map((note, index) => (
        <div key={index} className="note">
          {note.content} <Button onClick={(id)=>onClick(id)} id={note.id}>Delete</Button>
        </div>
      ))}
    </div>
  );
}
