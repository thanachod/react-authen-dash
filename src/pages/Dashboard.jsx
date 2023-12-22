import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Dashboard() {
  // const [userData, setUserData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('/users/user-list')
    .then((response) => {
      // console.log(response.data);
      setUserData(response.data)
    })
  }, []);

  return (
    <>
      <Navbar />
      <container>
        <table className="table-style" cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th>first name</th>
              <th>last name</th>
              <th>email</th>
              <th>phone number</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item) => {
              return (
                <tr key={item.name}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone_number}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </container>
    </>
  );
}
