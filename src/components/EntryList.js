import React from "react";

export const EntryList = ({ taskList, switchTask, handleOnSelect }) => {
  console.log(taskList);

  const ttl = taskList.reduce((acc, item) => acc + +item.hr, 0);
  return (
    <div className="col-md">
      <h2 className="text-center">Entry List</h2>
      <hr />
      <table className="table table-striped table-hover">
        <tbody id="task-list">
          {taskList.map((item, i) => {
            return (
              <>
                <tr key={item._id}>
                  <th></th>
                  <th>Task</th>
                  <th>Hours</th>
                  <th>Move to Done</th>
                </tr>
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value={item._id}
                      onChange={handleOnSelect}
                    />
                  </td>
                  <td>{item.task}</td>
                  <td>{item.hr + " Hours"}</td>
                  <td class="text-end">
                    {/* <button onclick="deleteTask({i})" class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                  </button> */}
                    <button
                      onClick={() => switchTask(item._id, "bad")}
                      className="btn btn-success text-center"
                    >
                      <i className="fa-solid fa-right-long"></i>
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
