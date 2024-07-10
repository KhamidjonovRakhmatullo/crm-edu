import React from 'react'
import { Table, TableCell, TableEditButton, TableHeader, TableOrderNumber } from "../../styles/materialsStyle";
import edit from '../../../assets/budjetAssets/pencil.svg';
import deleteIcon from '../../../assets/budjetAssets/trash.svg';


const SmsTemplates = () => {
  return (
    <div>
        <Table $borderRadius>
        <thead>
                <TableHeader $leftBorderRadius></TableHeader>
                <TableHeader></TableHeader>
                <TableHeader>Templates</TableHeader>
                <TableHeader></TableHeader>
                <TableHeader $rightBorderRadius></TableHeader>
        </thead>
        <tbody>
                <TableCell><TableOrderNumber>1</TableOrderNumber></TableCell>
                <TableCell><TableOrderNumber></TableOrderNumber></TableCell>
                <TableCell $Font500>Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, temporibus.</TableCell>
                <TableCell></TableCell>
                <TableCell>
                    <div style={{display: "flex", gap: "20px"}}>
                        <TableEditButton>
                            <img src={edit} alt="icon" />
                        </TableEditButton>
                        <TableEditButton $colorRed>
                            <img src={deleteIcon} alt="icon" />
                        </TableEditButton>
                    </div>
                </TableCell>
        </tbody>
      </Table>
    </div>
  )
}

export default SmsTemplates