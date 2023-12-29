import { IoTrashBin } from "react-icons/io5";
function ToDo({ toDoName, toDodate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{toDoName}</div>
        <div className="col-4">{toDodate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger my-button"
            onClick={() => onDeleteClick(toDoName)}
          >
            <IoTrashBin />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDo;
