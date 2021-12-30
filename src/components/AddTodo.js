const AddTodo = () => {
  return (
    <>
      <form>
        <div className="d-flex m-3">
          <div className="form-group mx-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a todo"
            />
          </div>
          <div className="form-group mx-2">
            <input type="date" className="form-control" />
          </div>
          <div className="form-group mx-2">
            <input type="submit" className="btn btn-primary" value="Add Todo" />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
