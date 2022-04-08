import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const useStyles = makeStyles({
  topScrollPaper: {
    alignItems: "flex-start",
  },
  topPaperScrollBody: {
    verticalAlign: "top",
  },
});
const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    save(taskObj);
  };

  const classes = useStyles();

  return (
    <Modal
    style={{marginTop:"100px"}}
     
      isOpen={modal}
      toggle={toggle}
    >
      <ModalHeader style={{ marginTop: "" }} toggle={toggle}>
        Create New Job Post
      </ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label style={{ marginTop: "" }}>Job role</label>
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={handleChange}
            name="taskName"
          />
        </div>
        <div className="form-group">
          <label>Post URL</label>
          <input
            rows="5"
            className="form-control"
            value={description}
            onChange={handleChange}
            name="description"
          ></input>
        </div>
        
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;
