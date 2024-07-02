import axios from "../api/pqnApi";
import React, { useEffect, useState } from "react";

export default function PqnFormAddOrEdit({
  onPqnClose,
  onPqnSubmitForm,
  renderUsers,
}) {
  console.log(renderUsers);
  const [pqnId, setPqnId] = useState(0);
  const [pqnUserName, setPqnUserName] = useState("");
  const [pqnPassword, setPqnPassword] = useState("");
  const [pqnEmail, setPqnEmail] = useState("");
  const [pqnPhone, setPqnPhone] = useState("");

  useEffect(() => {
    setPqnId(renderUsers.id);
    setPqnUserName(renderUsers.UserName);
    setPqnPassword(renderUsers.Password);
    setPqnEmail(renderUsers.Email);
    setPqnPhone(renderUsers.Phone);
  }, [renderUsers]);

  const pqnHandleClose = () => {
    onPqnClose(false);
  };

  const pqnHandleSubmit = async (event) => {
    event.preventDefault();
    console.log(pqnId, pqnUserName, pqnPassword, pqnEmail, pqnPhone);
    // post -> api
    let pqnObjUser = {
      UserName: pqnUserName,
      Password: pqnPassword,
      Email: pqnEmail,
      Phone: pqnPhone,
      id: pqnId,
    };
    const pqnRes = await axios.post("pqnUsers", pqnObjUser);

    onPqnSubmitForm(false);
  };
  return (
    <div className="">
      <form>
        <div className="input-group mb-3">
          <span className="input-group-text" id="id">
            Id
          </span>
          <input
            type="text"
            class="form-control"
            name="id"
            value={pqnId}
            onChange={(ev) => setPqnId(ev.target.value)}
            placeholder="id"
            aria-label="id"
            aria-describedby="id"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="UserName">
            UserName
          </span>
          <input
            type="text"
            class="form-control"
            name="UserName"
            value={pqnUserName}
            onChange={(ev) => setPqnUserName(ev.target.value)}
            placeholder="UserName"
            aria-label="UserName"
            aria-describedby="UserName"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="Password">
            Password
          </span>
          <input
            type="password"
            class="form-control"
            name="Password"
            value={pqnPassword}
            onChange={(ev) => setPqnPassword(ev.target.value)}
            placeholder="Password"
            aria-label="Password"
            aria-describedby="Password"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="Email">
            Email
          </span>
          <input
            type="email"
            class="form-control"
            name="Email"
            value={pqnEmail}
            onChange={(ev) => setPqnEmail(ev.target.value)}
            placeholder="Email"
            aria-label="Email"
            aria-describedby="Email"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="Phone">
            Phone
          </span>
          <input
            type="number"
            class="form-control"
            name="Phone"
            value={pqnPhone}
            onChange={(ev) => setPqnPhone(ev.target.value)}
            placeholder="Phone"
            aria-label="Phone"
            aria-describedby="Phone"
          />
        </div>
        <button
          className="btn btn-primary"
          name="btnPqnSave"
          onClick={(ev) => pqnHandleSubmit(ev)}
        >
          Ghi lại
        </button>
        <button className="btn btn-danger" onClick={pqnHandleClose}>
          Đóng
        </button>
      </form>
    </div>
  );
}
