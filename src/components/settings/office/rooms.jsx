import React, { useState } from 'react'
import { Table, TableCell, TableEditButton, TableHeader, TableOrderNumber } from "../../styles/materialsStyle";
import edit from '../../../assets/budjetAssets/pencil.svg';
import deleteIcon from '../../../assets/budjetAssets/trash.svg';


const Rooms = () => {

  const [event, setEvent] = useState("")
  const [task, setTask] = useState([])

  const handleChange = (e) => {
    const dataValue = (e.target.value)
    setEvent(dataValue)
    console.log(dataValue)
  }
  function handleAddTask(){
    if(task !== ""){
      setTask((prevTask) => [...prevTask, event])
      setEvent("")
    }
  }

  function handleDelete(){
    setTask([])
  }
  return (
    <div>
        <Table $borderRadius>
        <thead>
                <TableHeader $leftBorderRadius></TableHeader>
                <TableHeader></TableHeader>
                <TableHeader>Rooms name</TableHeader>
                <TableHeader></TableHeader>
                <TableHeader $rightBorderRadius></TableHeader>
        </thead>
        <tbody>
                <TableCell><TableOrderNumber>1</TableOrderNumber></TableCell>
                <TableCell><TableOrderNumber></TableOrderNumber></TableCell>
                <TableCell $Color2nd $Font500>Room #1</TableCell>
                <TableCell></TableCell>
                <TableCell>
                    <div style={{display: "flex", gap: "20px"}}>
                        <TableEditButton onClick={handleAddTask}>
                            <img src={edit} alt="icon"/>
                        </TableEditButton>
                        <TableEditButton $colorRed onClick={handleDelete}>
                            <img src={deleteIcon} alt="icon" />
                        </TableEditButton>
                    </div>
                </TableCell>
        </tbody>
      </Table>
      <input type="text" name="" id="" onChange={handleChange} value={event}/>
        {task.map((value, key)=> {
          return(
            <ul key={key}>
              <li>{value}</li>
            </ul>
          )
        })}
    </div>
  )
}

export default Rooms