import { useEffect } from "react";
import { connect } from "react-redux";

import { getLists } from "../actions";
import List from "./List";
import Todo from "./Todo";

function App({ getLists }) {
  useEffect(() => {
    getLists();
  }, [getLists]);
  return (
    <div className="d-flex">
      <List />
      <Todo />
    </div>
  );
}

export default connect(null, { getLists })(App);
