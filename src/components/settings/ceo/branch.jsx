import React from 'react'
import { Table, TableCell, TableEditButton, TableHeader, TableOrderNumber } from "../../styles/materialsStyle";
import edit from '../../../assets/budjetAssets/pencil.svg';
import deleteIcon from '../../../assets/budjetAssets/trash.svg';
import { GroupsBg } from '../../styles/studentsStd/studentsStyle';


const Branch = () => {
  return (
    <div>
        <Table $borderRadius>
        <thead>
                <TableHeader $leftBorderRadius></TableHeader>
                <TableHeader>Branch name</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Balance</TableHeader>
                <TableHeader $rightBorderRadius $textCenterTH>More</TableHeader>
        </thead>
        <tbody>
                <TableCell><TableOrderNumber>1</TableOrderNumber></TableCell>
                <TableCell>Seoul</TableCell>
                <TableCell $Color2nd $Font500>Active</TableCell>
                <TableCell $Color2nd $Font500>
                    <GroupsBg $bgBlue $colorWhite $font700>1.200.000 WON</GroupsBg>
                </TableCell>
                <TableCell $TextCenter>
                    <div style={{display: "flex", justifyContent: "center", gap: "20px"}}>
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

export default Branch