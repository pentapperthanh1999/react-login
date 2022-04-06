import { Title, Text } from "../../components/common";
import React, { useCallback, useState } from "react";
import {
  BoxContent,
  FormWrapper,
  Wrapper,
  ButtonWrapper,
} from "./FormMultiStepPage.styled";
import Button from "../../components/common/Button";
import Account from "./Account.js";
import Personal from "./Personal.js";
import Other from "./Other.js";
import ProgressBar from "../../components/common/ProgressBar";
import { connect } from "react-redux";
import Loading from "../../components/Loading";
import { userActions } from "../../actions";

const FormMultiStepPage = ({ isLoading, register }) => {
  const [page, setPage] = useState(1); // step default 1
  const [isValidated, setIsValidated] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    language: "",
    position: "",
  });
  const FormTitles = ["Account", "Personal Info", "Other"]; // list page
  // handle next step / submit
  const onChangeNextStep = () => {
    setIsClicked(true);
    if (isValidated) {
      setPage((currentPage) => currentPage + 1);
    }
  };
  // handle prev step;
  const onChangePrevStep = () => {
    setIsClicked(true);
    setPage((currentPage) => currentPage - 1);
  };
  //handle submit form
  const onSubmitForm = () => {
    setIsClicked(true);
    if (isValidated && page === FormTitles.length) {
      register(formData);
    }
  };
  // render page by step
  const PageDisplay = () => {
    switch (page) {
      case 1:
        return (
          <Account
            formData={formData}
            setFormData={setFormData}
            isClicked={isClicked}
            isValidated={isValidated}
            setIsClicked={setIsClicked}
            setIsValidated={setIsValidated}
          />
        );
      case 2:
        return (
          <Personal
            formData={formData}
            setFormData={setFormData}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            isValidated={isValidated}
            setIsValidated={setIsValidated}
          />
        );
      case 3:
        return (
          <Other
            formData={formData}
            setFormData={setFormData}
            isValidated={isValidated}
            setIsValidated={setIsValidated}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        );
      default:
        return "";
    }
  };

  return (
    <Wrapper>
      <BoxContent>
        <Title>Sign Up Your User Account</Title>
        <FormWrapper>
          <ProgressBar currentPage={page} maxPage={3} />
          <Text type="medium">{FormTitles[page - 1]}</Text>
          {PageDisplay()}
          <ButtonWrapper>
            <Button
              handleClick={onChangePrevStep}
              label="Prev"
              isShow={page === 1 ? false : true}
            />
            <Button
              handleClick={onChangeNextStep}
              isShow={page < FormTitles.length ? true : false}
              label={"Next"}
            />
            <Button
              handleClick={onSubmitForm}
              isShow={page === FormTitles.length}
              label={"Submit"}
            />
          </ButtonWrapper>
        </FormWrapper>
      </BoxContent>
      {isLoading && <Loading />}
    </Wrapper>
  );
};
function mapStateToProps(state) {
  const { isLoading } = state.registration;
  return { isLoading };
}

const actionCreators = {
  register: userActions.register,
};

const connectedFormMultiStepPage = connect(
  mapStateToProps,
  actionCreators
)(FormMultiStepPage);
export { connectedFormMultiStepPage as FormMultiStepPage };
