import { connect } from "react-redux";
import { setListInput, removeList } from "../actions";

const DisplayLists = ({ lists, setListInput, removeList }) => {
  const allLists = lists.map((list) => {
    return (
      <div
        key={list._id}
        className="border border-top-0 d-flex justify-content-between p-2"
      >
        <div>
          <div className="px-2">
            <p>{list.name}</p>
          </div>
        </div>
        <div className="d-flex">
          <div className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil-square text-primary"
              viewBox="0 0 16 16"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setListInput({ inputListValue: list.name, id: list._id });
              }}
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </div>
          <div className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash-fill text-danger"
              viewBox="0 0 16 16"
              style={{ cursor: "pointer" }}
              onClick={() => {
                removeList({ id: list._id });
              }}
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="m-3">
        <div className="border d-flex justify-content-between p-2">
          <div>
            <div className="px-2">
              <h6 className="mb-0">Name</h6>
            </div>
          </div>
          <div className="d-flex">
            <div className="px-2">
              <h6 className="mb-0">Edit</h6>
            </div>
            <div className="px-2">
              <h6 className="mb-0">Delete</h6>
            </div>
          </div>
        </div>

        {allLists}
      </div>
    </>
  );
};

export default connect(
  (state) => ({
    lists: state.lists,
  }),
  { setListInput, removeList }
)(DisplayLists);
