import { useParams } from "react-router-dom";
import { studentsMock } from "../mock/studentsMock/studentsMock";
import {
  DivSpaceBetween,
  StudentsRoomWrapper,
  TeacherGroupAvatar,
  TeacherGroupBox,
  TeacherGroupLabel,
  TeacherGroupName,
  TeacherGroupRoom,
  TeacherGroupStartDate,
} from "../styles/teachersStd/teachersStyle";
import {
  AddButtonWhite,
  StudentProdfileContainer,
} from "../styles/studentsStd/studentsStyle";
import GroupProfileModal from "../groups/groupProfileModal";
import TabsController from "./tabs/tabsController";
// import AddNewStudentModal from "./addNewStudentModal";

const StudentsProfile = () => {
  let { id } = useParams();
  const data = studentsMock.maindata.find((value) => value.id === parseInt(id));

  return (
    <StudentProdfileContainer>
      <TeacherGroupBox>
        <DivSpaceBetween style={{ marginBottom: "27px" }}>
          <TeacherGroupAvatar>{data.profile.fullName[0]}</TeacherGroupAvatar>
          <GroupProfileModal />
        </DivSpaceBetween>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            gap: "12px",
          }}
        >
          <DivSpaceBetween>
            <StudentsRoomWrapper>
              <TeacherGroupRoom>
                {data.profile.balance || "no data"} $
              </TeacherGroupRoom>
            </StudentsRoomWrapper>
            <TeacherGroupLabel>Balance</TeacherGroupLabel>
          </DivSpaceBetween>
          <DivSpaceBetween>
            <TeacherGroupName $fontSize24>
              {data.profile.fullName || "no data"}
            </TeacherGroupName>
            <TeacherGroupLabel>Name</TeacherGroupLabel>
          </DivSpaceBetween>
          <DivSpaceBetween>
            <TeacherGroupStartDate>
              {data.profile.id || "no data"}
            </TeacherGroupStartDate>
            <TeacherGroupLabel>ID</TeacherGroupLabel>
          </DivSpaceBetween>
          <DivSpaceBetween>
            <TeacherGroupStartDate>
              {data.profile.phoneNumber || "no data"}
            </TeacherGroupStartDate>
            <TeacherGroupLabel>Phone number</TeacherGroupLabel>
          </DivSpaceBetween>
          <DivSpaceBetween>
            <TeacherGroupStartDate>
              {data.profile.branch || "no data"}
            </TeacherGroupStartDate>
            <TeacherGroupLabel>Branch</TeacherGroupLabel>
          </DivSpaceBetween>
          <DivSpaceBetween>
            <TeacherGroupStartDate>
              {data.profile.addDate || "no data"}
            </TeacherGroupStartDate>
            <TeacherGroupLabel>Add date</TeacherGroupLabel>
          </DivSpaceBetween>
        </div>
        <hr
          style={{
            backgroundColor: "#2C2669",
            height: "1.4px",
            margin: "50px 0px 20px 0px",
          }}
        />
        <DivSpaceBetween>
          <AddButtonWhite $maxWidhtFitContent style={{ padding: "8px 40px" }}>
            <span>+</span> Add payment
          </AddButtonWhite>
          <AddButtonWhite $maxWidhtFitContent style={{ padding: "8px 40px" }}>
            <span>+</span> Add to group
          </AddButtonWhite>
        </DivSpaceBetween>
      </TeacherGroupBox>
      {/* //////// */}
      <TabsController/>
    </StudentProdfileContainer>
  );
};

export default StudentsProfile;
