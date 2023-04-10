import React, { useEffect, useState } from "react";
import CustomerService from "../services/CustomerService";
import { Link } from "react-router-dom";

const CustomerList = () => {
  const [customer, setCustomer] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    getcu();
  }, []);

  const getcu = () => {
    CustomerService.getCustomer()
      .then((response) => {
        setCustomer(response.data);
        const { data } = response;
        const { id } = data;
        setId(response.data.id);
        console.log(id);
      })
      .catch((neg) => {
        setCustomer(neg);
        console.log(neg);
      });
  };

  const deletecu = (custid) => {
    console.log(custid);
    CustomerService.deletecust(custid)
      .then((pos) => {
        getcu();
      })
      .catch((neg) => {
        console.log(neg);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Customer List</h2>
      <Link to="/AddCustomer" className="btn btn-success">
        Add Customer
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th>Id</th>
          <th>first Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Mobile No</th>
          <th>Action</th>
        </thead>
        <tbody>
          {customer.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.surname}</td>
              <td>{customer.address}</td>
              <td>{customer.mobileno}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/editCustomer/${customer.id}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deletecu(customer.id);
                  }}
                  style={{ marginLeft: "10px" }}
                >
                  delete
                </button>
                <Link
                  className="btn btn-info"
                  to={`/viewCustomer/${customer.id}`}
                  style={{ marginLeft: "10px" }}
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
