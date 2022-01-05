import { connect } from "react-redux";
import { setListInput, addList } from "../actions";

const AddList = ({ listInput, setListInput, addList }) => {
  const inputListHandler = (event) => {
    event.preventDefault();

    if (listInput.inputListValue) {
      addList({ list: listInput.inputListValue, id: listInput.id });
      setListInput({ inputListValue: "", id: null });
    }
  };
  return (
    <>
      <form>
        <div className="d-flex m-3">
          <div className="form-group px-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter name of list"
              value={listInput.inputListValue}
              onChange={(e) => {
                setListInput({
                  inputListValue: e.target.value,
                  id: listInput.id,
                });
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Add"
              onClick={(e) => inputListHandler(e)}
              disabled={!listInput.inputListValue}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default connect(({ listInput }) => ({ listInput }), {
  setListInput,
  addList,
})(AddList);
