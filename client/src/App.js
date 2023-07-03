import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

const customer = [{
  'id': 1,
  'image': 'https://picsum.photos/64/64/?random',
  'name': '홍길원',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://picsum.photos/64/64',
  'name': '홍길투',
  'birthday': '987654',
  'gender': '여자',
  'job': '대학생'
},
{
  'id': 3,
  'image': 'https://loremflickr.com/64/64',
  'name': '홍길삼',
  'birthday': '980004',
  'gender': '남자',
  'job': '백수'
}
]


function App() {
  
  return (
    <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {customer.map(c=> {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);})}        
       </TableBody>
        </Table>
       
      
    </Paper>
  );
}

export default App;
