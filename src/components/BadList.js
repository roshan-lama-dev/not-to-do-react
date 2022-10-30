import React from "react";

export const BadList = ({ badList, handleOnSelect, switchTask }) => {
  const ttl = badList.reduce((acc, item) => acc + +item.hr, 0);
  return (
    <div className="col-md">
      <h2 className="text-center">Bad List</h2>
      <hr />
      <table className="table table-striped table-hover">
        <tbody id="bad-task">
          {badList.map((item, i) => {
            return (
              <tr key={item._id}>
                <td>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value={item._id}
                    onChange={handleOnSelect}
                    // checked={setItemToDelete.include}
                  />
                </td>
                <td>{item.task}</td>
                <td>{item.hr}</td>
                <td class="text-end">
                  <button
                    onClick={() => switchTask(item._id, "entry")}
                    class="btn btn-warning"
                  >
                    <i class="fa-solid fa-left-long"></i>
                  </button>
                  {/* <button onclick="deleteBadTask(${i})" class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                  </button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="text-end fw-bold">
        You could have saved = <span id="totalBadHr">{ttl}</span> Hrs
      </div>
    </div>
  );
};
