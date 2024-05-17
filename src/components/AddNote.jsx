/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import Button from "@mui/material/Button";
export default function AddNote({onSubmit, handleChange}){
    return (
        <form onSubmit={onSubmit}>
      <div className="add-note">
        <h1>Add Note</h1>
        <textarea
          placeholder="Enter notes: "
          onBlur={handleChange}
        ></textarea>
      </div>
        <Button variant="contained" type="submit">OK</Button>
        </form>
    );
}