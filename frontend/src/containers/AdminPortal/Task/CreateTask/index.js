import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DefaultAdmin from "../../../../components/layouts/DefaultLayout/Admin";
import {
  CreateTaskWrapper,
  FormWrapper,
  ButtonWrapper,
} from "./CreateTask.styled";
import { Title, Button } from "../../../../components/common/";
import InputField from "../../../../components/common/Input";
import { Link } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";

function CreateTask(props) {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    status: "",
    priority: 1,
    start_time: "",
    end_time: "",
    users: [],
  });
  const { title, type, status, priority, start_time, end_time, users } =
    formData;
  const { options, SetOptions } = [];
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("persist:root"));
    const localDataUser = JSON.parse(localUser.users);
    const arrayUser = localDataUser.users;
    setFormData({ ...formData, users: arrayUser });
  }, []);
  const data = [
    {
      id: 1,
      name: "Thanh",
    },
    {
      id: 2,
      name: "Nguyen",
    },
  ];
  return (
    <DefaultAdmin>
      <CreateTaskWrapper>
        <Title className="text-center">Create Task</Title>
        <FormWrapper>
          <InputField
            label="Title"
            name="title"
            placeholder="Enter your title"
            value={title}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <InputField
            label="Type"
            name="type"
            placeholder="Enter your type"
            value={type}
            type="text"
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          />
          <InputField
            label="Status"
            name="status"
            placeholder="Enter your status"
            value={status}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
          />
          <InputField
            label="Priority"
            name="priority"
            placeholder="Enter your priority"
            value={priority}
            type="number"
            onChange={(e) =>
              setFormData({ ...formData, priority: e.target.value })
            }
          />
          <InputField
            label="Please pick a start time"
            name="start_time"
            value={start_time}
            type="date"
            onChange={(e) =>
              setFormData({ ...formData, start_time: e.target.value })
            }
          />
          <InputField
            label="Please pick a end time"
            name="end_time"
            value={end_time}
            type="date"
            onChange={(e) =>
              setFormData({ ...formData, end_time: e.target.value })
            }
          />
          <Multiselect
            // options={users}
            // options={users}
            // displayValue={users.name}
            placeholder="Please assign task for user"
            showArrow
            showCheckbox
          />
          <ButtonWrapper>
            <Button type="submit">Save</Button>
            <Link to="/tasks">Cancel</Link>
          </ButtonWrapper>
        </FormWrapper>
      </CreateTaskWrapper>
    </DefaultAdmin>
  );
}

CreateTask.propTypes = {};

export default CreateTask;
