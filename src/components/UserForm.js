import React, { Component } from "react";

const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

const formValid = ({ isError, ...rest }) => {
  let isValid = false;

  Object.values(isError).forEach((val) => {
    if (val.length > 0) {
      isValid = false;
    } else {
      isValid = true;
    }
  });

  Object.values(rest).forEach((val) => {
    if (val === null) {
      isValid = false;
    } else {
      isValid = true;
    }
  });
  return isValid;
};

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      isError: {
        name: "",
        email: "",
        password: "",
      },
    };
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" name="email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" name="password" />
        </div>
        <br />
        <button type="submit" className="btn btn-block btn-danger"></button>
      </form>
    );
  }
}

export default UserForm;
