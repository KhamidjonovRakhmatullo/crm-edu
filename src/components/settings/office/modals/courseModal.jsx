import React from "react";
import {
  ExitButton,
  ModalBody,
  ModalContainer,
  ModalTitel,
} from "../../../styles/profileStd/profileModalStyle";
import {
  AddButtonBlue,
  InputStyled,
  InputTitle,
  InputWrapper,
  SendButton,
  TextAreaStyled,
} from "../../../styles/materialsStyle";
import ClearIcon from "@mui/icons-material/Clear";
import { Modal } from "@mui/material";

const CourseModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ width: "25%" }}>
      <AddButtonBlue onClick={handleOpen}>+ Add new course</AddButtonBlue>

      <Modal open={open} onClose={handleClose}>
        <ModalContainer>
          <ExitButton>
            <ClearIcon onClick={handleClose} style={{ marginRight: "15px" }} />
          </ExitButton>
          <ModalBody>
            <ModalTitel>Create new couse</ModalTitel>
            <InputWrapper>
              <InputTitle>Course name</InputTitle>
              <InputStyled
                type="text"
                name="course-name"
                placeholder="Enter course name"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Lesson duration</InputTitle>
              <InputStyled
                type="text"
                name="lesson-duration"
                placeholder="Select"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Course duration (month)</InputTitle>
              <InputStyled
                type="text"
                name="course-duration"
                placeholder="Enter course duration"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Course price</InputTitle>
              <InputStyled
                type="text"
                name="course-price"
                placeholder="Enter course price"
              />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>Comment</InputTitle>
              <TextAreaStyled $height100 placeholder="Write Comment"/>
            </InputWrapper>
            <SendButton>Create course</SendButton>
          </ModalBody>
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default CourseModal;
