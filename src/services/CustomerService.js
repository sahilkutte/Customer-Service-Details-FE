import axios from "axios";

const url = "http://localhost:2000/customer";

class Customerservice {
  getCustomer() {
    return axios.get(url);
  }
  addCusttt(customer) {
    return axios.post(url, customer);
  }

  getCustomerByid(id) {
    return axios.get(url + "/" + id);
  }
  updatecust(id, customer) {
    return axios.put(url + "/" + id, customer);
  }
  deletecust(custid) {
    return axios.delete(url + "/" + custid);
  }
}
export default new Customerservice();
