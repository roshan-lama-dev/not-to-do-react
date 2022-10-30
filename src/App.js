import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Title } from "./components/Title";
import { Form } from "./components/Form";
import { ListArea } from "./components/ListArea";
import { useState } from "react";

const hrsPerWeek = 7 * 24;
function App() {
  // created the useState to hold the data coming from the components
  const [taskList, setTaskList] = useState([]);
  const [itemToDelete, setItemToDelete] = useState([]);
  const [badList, setBadList] = useState([]);

  const ttl = taskList.reduce((acc, item) => acc + +item.hr, 0);
  const addTask = (data) => {
    if (ttl < hrsPerWeek) {
      setTaskList([...taskList, data]);
    } else {
      alert("Can add task that takes more than 250 hours");
      // ref.current.value = ''
      return;
    }
  };

  const switchTask = (_id, type) => {
    console.log(_id);
    const temArg = taskList.map((item) => {
      if (item._id === _id) {
        item.type = type;
      }
      return item;
    });
    setTaskList(temArg);
    setBadList(temArg);

    console.log(badList);
  };

  const handleOnSelect = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);
    console.log(value);
    checked
      ? setItemToDelete([...itemToDelete, value])
      : setItemToDelete(itemToDelete.filter((item) => item !== value));
  };

  const handelOnDelete = (value) => {
    if (!window.confirm("Are you sure you want to delete")) {
      return;
    }

    console.log("clicked");
    // taskToDoArg = taskToDoArg.filter((item, i) => !i == index);
    setTaskList(taskList.filter((item, i) => !itemToDelete.includes(item._id)));
    setItemToDelete([]);
  };

  console.log(itemToDelete);

  return (
    <div className="wrapper">
      <div className="container">
        <Title />

        <Form addTask={addTask} />

        <ListArea
          taskList={taskList}
          switchTask={switchTask}
          handleOnSelect={handleOnSelect}
          setItemToDelete={setItemToDelete}
        />

        <div className="row fw-bold">
          <div className="col">
            The total hours allocated = <span id="totalHrs">{ttl}</span> Hrs
          </div>
        </div>

        {/* this div only shows when the itemtodelete array is bigger than o which is so when the check box is checked */}
        {itemToDelete.length > 0 && (
          <div className="d-grid g-2">
            <button
              onClick={() => handelOnDelete(itemToDelete.value)}
              className="btn btn-danger"
            >
              Delete selected ({itemToDelete.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
