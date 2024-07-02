import "./App.css";
import PqnListUsers from "./components/PqnListUsers";
import axios from "./api/pqnApi";
import { useEffect, useState } from "react";
import PqnFormAddOrEdit from "./components/PqnFormAddOrEdit";
function PqnApp() {
  const [pqnListUsers, setPqnListUsers] = useState([]);

  // đọc dữ liệu từ api
  const pqnGetAllUsers = async () => {
    const pqnResponse = await axios.get("pqnUsers");
    console.log("Api Data:", pqnResponse.data);
    setPqnListUsers(pqnResponse.data);
  };

  useEffect(() => {
    pqnGetAllUsers();
    console.log("State Data:", pqnListUsers);
  }, []);

  const [pqnAddOrEdit, setPqnAddOrEdit] = useState(false);
  const pqnInitUser = {
    Username: "Phạm Quang Nhất",
    Password: "21/05/2004",
    Email: "phamquangnhatdz2105@gmail.com",
    Phone: "0817842585",
    id: "2210900115",
  };
  const [pqnUser, setPqnUser] = useState(pqnInitUser);

  // Hàm xử lý nút thêm mới
  const pqnHandleAddNew = () => {
    setPqnAddOrEdit(true);
  };
  const pqnHandleClose = (param) => {
    setPqnAddOrEdit(param);
  };
  const pqnHandleSubmit = (param) => {
    pqnGetAllUsers();
    setPqnAddOrEdit(param);
  };
  const pqnHandleDelete = () => {
    pqnGetAllUsers();
  };
  let pqnElementForm =
    pqnAddOrEdit === true ? (
      <PqnFormAddOrEdit
        renderUsers={pqnUser}
        onPqnClose={pqnHandleClose}
        onPqnSubmitForm={pqnHandleSubmit}
      />
    ) : (
      ""
    );
  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApi</h1>
      <hr />
      <PqnListUsers
        renderPqnListUsers={pqnListUsers}
        onPqnDelete={pqnHandleDelete}
      />
      <button
        className="btn btn-primary"
        name="btnPqnThemMoi"
        onClick={pqnHandleAddNew}
      >
        Thêm mới
      </button>
      <hr />
      {pqnElementForm}
    </div>
  );
}

export default PqnApp;
