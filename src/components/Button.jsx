/* eslint-disable react/prop-types */
export default function Button({ onClick, id }) {
    return (
        <button
            type="button"
            onClick={() => {
                onClick(id);
            }}
        >
            Delete
        </button>
    );
}