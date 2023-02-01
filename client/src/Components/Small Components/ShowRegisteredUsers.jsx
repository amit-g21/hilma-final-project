import { useState } from "react";

function ShowRegisteredUsers(props) {
  const [selectedValue, setSelectedValue] = useState("S");
  const [inputArr, setInputArr] = useState([""]);
  let i = 0;

  return (
    <div className="registeredUsers">
      <h4>registeredUsers:</h4>
      {props.registeredUsers.map((user) => {
        i++;
        return (
          <div key={Math.random() * 1000}>
            <p>Number: {i}</p>
            <p>Full Name: {user.full_name}</p>
            <p>User Name: {user.username}</p>
            <p>Birth Date: {user.birth_date}</p>
            <p>Admin Permissions: {user.is_admin === 1 ? "yes" : "no"}</p>
            <button>Give Admin Permissions</button>
            <button>Delete User</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default ShowRegisteredUsers;
