import React from "react";
import {
  ChangedDate,
  ChangedStatus,
  GroupName,
  HistoryContainer,
  HistoryName,
  LINE,
} from "../../styles/groupsStd/groupsStyle";
import {
  DivSpaceBetween,
  TeacherGroupName,
} from "../../styles/teachersStd/teachersStyle";

const TabHistory = () => {
  return (
    <HistoryContainer>
      <DivSpaceBetween>
        <TeacherGroupName>Status changed</TeacherGroupName>
        <ChangedDate>12.09.2023 | 11:20:26</ChangedDate>
      </DivSpaceBetween>
      <DivSpaceBetween>
        <HistoryName>Jumayev Eshbo’ri - (93) 635 42 98 </HistoryName>
        <ChangedDate>Teacher Shone</ChangedDate>
      </DivSpaceBetween>
      <GroupName>Group name: Facebook</GroupName>
      <GroupName>Group: #68125</GroupName>
      <GroupName>
        Current status: <ChangedStatus>FROZEN</ChangedStatus>{" "}
      </GroupName>
      <GroupName>
        Previous status: <ChangedStatus>ACTIVE</ChangedStatus>{" "}
      </GroupName>
      <LINE />
    </HistoryContainer>
  );
};

export default TabHistory;
