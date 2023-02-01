import { useState } from "react";

function ShowRegisteredUsers(props) {
  const [selectedValue, setSelectedValue] = useState("S");
  const [inputArr, setInputArr] = useState([""]);
  let i = 0;

  const changePer = async (adminChange , editUser) => {
    console.log(adminChange);
    const data = await fetch(`http://localhost:8000/userinfo/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        editUser: editUser,
        isAdmin: adminChange
      })
    })
    window.location.reload();
  }

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
              <button onClick={() => changePer(!user.is_admin , user.username)}>Give Admin Permissions</button>
              <button>Delete User</button>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }

  export default ShowRegisteredUsers;
