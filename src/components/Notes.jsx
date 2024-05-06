/* eslint-disable react/prop-types */
import "../index.css";
import Button from "./Button";
export default function Notes({ notes, onClick,  }) {
  console.log(typeof notes);
  
  return (
    <>
      {[...notes].map((note, index) => (
        <div key={index} className="text">
          {note.content}{" "}
          <Button onClick={(id) => onClick(id)} id={note.id} />
        </div>
      ))}
    </>
  );
}
