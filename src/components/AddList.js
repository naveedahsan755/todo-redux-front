const AddList = () => {
  return (
    <>
      <form>
        <div className="d-flex m-3">
          <div className="form-group px-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter name of list"
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Add" />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddList;
