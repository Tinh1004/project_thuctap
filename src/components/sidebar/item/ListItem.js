import Item from './Item'
import List from '../../playlist/form';
import React, { useState } from "react";

const item = {
  title: "Tạo playlist",
  icon: <i className='bx bx-plus icon'></i>,
  url: "/ss"
}
export default function ListItem({ data }) {
  const [visible, setVisible] = useState(false);
  const handler = () => {
    setVisible(true)
  };
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <ul className="menu-links">
      {data.map((item, index) => <Item key={index} item={item} />)}
      <li className="nav-link" style={{ cursor: 'pointer' }}   onClick={handler}>
        {item.icon}
        <List item={item} closeHandler={closeHandler} visible={visible}/>
      </li>
    </ul>
  )
}