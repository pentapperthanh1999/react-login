import React, { useEffect, memo } from "react";
import PropTypes from "prop-types";
import InputField from "../../components/common/Input";

function Other({
  formData,
  setFormData,
  setIsValidated,
  isValidated,
  isClicked,
  setIsClicked,
}) {
  const { language, position } = formData;

  useEffect(() => {
    // console.log("account-render", isCheck);
    if (language && position) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  }, [language, position]);

  useEffect(() => {
    setIsClicked(false);
  }, []);

  return (
    <>
      <InputField
        type="text"
        placeholder="Enter your Language"
        name="language"
        value={language}
        label="Language"
        onChange={(e) => setFormData({ ...formData, language: e.target.value })}
        isRequired={!isValidated && isClicked ? true : false}
      />
      <InputField
        type="text"
        placeholder="Enter your Position"
        name="position"
        value={position}
        label="Position"
        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
        isRequired={!isValidated && isClicked ? true : false}
      />
    </>
  );
}

Other.propTypes = {
  formData: PropTypes.shape({
    language: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  }).isRequired,
  setFormData: PropTypes.func,
  isValidated: PropTypes.bool.isRequired,
  setIsValidated: PropTypes.func,
  isClicked: PropTypes.bool.isRequired,
  setIsClicked: PropTypes.func.isRequired,
};
Other.defaultProps = {
  isCheck: false,
  formData: {},
  setFormData: () => {},
  setIsValidated: () => {},
  isClicked: false,
  setIsClicked: () => {},
};

export default memo(Other);
