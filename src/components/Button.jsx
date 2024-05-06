/* eslint-disable react/prop-types */
import "../index.css";
export default function Button({ onClick, id }) {
    return (
        <button
            className="close"
            type="button"
            onClick={() => {
                onClick(id);
            }}
        >
            Delete
        </button>
    );
}