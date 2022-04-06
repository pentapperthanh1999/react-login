import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import InputField from "../../components/common/Input";

function Account({
  formData,
  setFormData,
  isValidated,
  setIsValidated,
  isClicked,
  setIsClicked,
  onIsValidated,
}) {
  const { username, email, password } = formData;
  //creating error state for validation
  useEffect(() => {
    if (username && password && email) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  }, [username, password, email]);
  // reset isClicked
  useEffect(() => {
    setIsClicked(false);
  }, []);

  return (
    <>
      <InputField
        label="Username"
        placeholder="Enter your username"
        value={username}
        type="text"
        name="username"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        isRequired={!isValidated && isClicked ? true : false}
      />
      <InputField
        label="Email"
        placeholder="Enter your email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        isRequired={!isValidated && isClicked ? true : false}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        isRequired={!isValidated && isClicked ? true : false}
      />
    </>
  );
}

Account.propTypes = {
  formData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  setIsValidated: PropTypes.func.isRequired,
  isClicked: PropTypes.bool.isRequired,
  setIsClicked: PropTypes.func.isRequired,
};

Account.defaultProps = {
  formData: {},
  setFormData: () => {},
  setIsValidated: () => {},
  isClicked: false,
  setisClicked: () => {},
};

export default memo(Account);
