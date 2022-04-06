import React, { useEffect, memo } from "react";
import InputField from "../../components/common/Input";
import PropTypes from "prop-types";
function Personal({
  formData,
  setFormData,
  isValidated,
  setIsValidated,
  isClicked,
  setIsClicked,
  onIsValidated,
}) {
  const { firstname, lastname } = formData;

  useEffect(() => {
    if (firstname && lastname) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  }, [firstname, lastname]);

  useEffect(() => {
    setIsClicked(false);
  }, []);

  return (
    <>
      <InputField
        label="First Name"
        value={formData.firstname}
        onChange={(e) =>
          setFormData({ ...formData, firstname: e.target.value })
        }
        placeholder="Enter your firstname"
        isRequired={!isValidated && isClicked ? true : false}
      />
      <InputField
        label="Last Name"
        value={formData.lastname}
        onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
        placeholder="Enter your lastname"
        isRequired={!isValidated && isClicked ? true : false}
      />
    </>
  );
}

Personal.propTypes = {
  formData: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  setIsValidated: PropTypes.func.isRequired,
  isClicked: PropTypes.bool.isRequired,
  setIsClicked: PropTypes.func.isRequired,
};
Personal.defaultProps = {
  formData: {},
  setFormData: () => {},
  setIsValidated: () => {},
  isClicked: false,
  setIsClicked: () => {},
};
export default memo(Personal);
