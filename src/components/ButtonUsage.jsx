/* eslint-disable react/prop-types */
import "../index.css";
import Button from "@mui/material/Button";
export default function ButtonUsage({ onClick, id }) {
    return (
      <Button
        variant="contained"
        type="button"
        onClick={() => {
          onClick(id);
        }}
      >
        Delete
      </Button>
    );
}