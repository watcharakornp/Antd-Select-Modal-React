import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./style.css";
import 'antd/dist/antd.css';
import  SelectModal from "./SelectModal"

export default function App() {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];


  const initSalectModal =  {
    titleModal:"Select Modal",
    search__Placeholder:"Search Modal....",
    width : 800,
    columns:columns,
    dataSource:data
  }

  return (
    <div className="App">
        <SelectModal data={initSalectModal}/>
    </div>
  );
}
