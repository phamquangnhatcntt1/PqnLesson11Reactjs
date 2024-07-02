import React from "react";
import axios from "../api/pqnApi";
export default function PqnListUsers({ renderPqnListUsers, onPqnDelete }) {
  console.log("PqnListUsers:", renderPqnListUsers);
  // hiener thi đữ liệu
  let pqnElementUser = renderPqnListUsers.map((pqnUser, index) => {
    return (
      <tr key={index}>
        <td>{pqnUser.id}</td>
        <td>{pqnUser.Username}</td>
        <td>{pqnUser.Password}</td>
        <td>{pqnUser.Email}</td>
        <td>{pqnUser.phone}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => pqnHandleDelete(pqnUser)}
          >
            {" "}
            Delete{" "}
          </button>
        </td>
      </tr>
    );
  });

  const pqnHandleDelete = async (param) => {
    if (window.confirm("Bạn có muốn xóa thật không?")) {
      const pqnRes = await axios.delete("pqnUsers/" + param.id);
    }
    onPqnDelete();
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>UserName</th>
              <th>Password</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>{pqnElementUser}</tbody>
        </table>
      </div>
    </div>
  );
}
