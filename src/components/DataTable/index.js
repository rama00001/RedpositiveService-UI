import React, { useEffect, useState } from "react";

// Styles
import "./style.scss";

// Images
import PlaceholderImg from "../../img/placeholder-user.jpg";
import SortIcon from "../../img/sort-icon.png";

const DataTable = props => {

   const [users, setUsers] = useState(props.users);

    useEffect(() => {
     if(props.users.length<=0){
    setUsers([{
      name:"test",
      phone_number:"9999999999",
      email:"test@gmail.com",
      hobbies:"cricket"
    },
    {
      name:"test2",
      phone_number:"6999999999",
      email:"test2@gmail.com",
      hobbies:"cricket"
    },
    {
      name:"test3",
      phone_number:"7999999999",
      email:"test3@gmail.com",
      hobbies:"footbal"
    },
    {
      name:"test4",
      phone_number:"8999999999",
      email:"test4@gmail.com",
      hobbies:"chess"
    }
  ])
  }
  }, []);


 
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th></th>
            <th
              onClick={() => {
                props.onSortChange("name");
              }}
            >
              <span className="column-sort">
                Name
                <img src={SortIcon} alt="First Name" />
              </span>
            </th>
            <th
              onClick={() => {
                props.onSortChange("surname");
              }}
            >
              <span className="column-sort">
                E-Mail
                <img src={SortIcon} alt="Last Name" />
              </span>
            </th>
            <th
              onClick={() => {
                props.onSortChange("email");
              }}
            >
              <span className="column-sort">
               Phone Number
                <img src={SortIcon} alt="E-Mail" />
              </span>
            </th>
              <th>Hobbies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length ? (
            users.map(user => (
              <tr key={user.id}>
                <td className="field-avatar">
                  <img
                    src={user.avatar ? user.avatar : PlaceholderImg}
                    alt={user.first_name}
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone_number}</td>
                  <td>{user.hobbies}</td>
                <td className="field-actions">
                  <button
                    className="primary-btn"
                    onClick={() => {
                      props.updateRow(user);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="field-actions__delete"
                    onClick={() => props.deleteRow(user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                <div className="no-record-message">No Record!</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
