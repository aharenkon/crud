/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import Button from "@mui/material/Button";
export default function AddNote({onSubmit, handleChange}){
    return (
      <div className="add-note">
        <form onSubmit={onSubmit}>
        <h1>Add Note</h1>
        <textarea
          placeholder="Enter notes: "
          onBlur={handleChange}
        ></textarea>
        <Button variant="contained" type="submit">OK</Button>
        </form>
      </div>
    );
}