import Item from './Item'
import List from '../../playlist/form';
import React, { useState } from "react";
import { useContext } from 'react'
import { CloseContext } from '../../../contexts/CloseContext';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../../redux/selectors';
import { useNavigate } from 'react-router-dom';
const item = {
  title: "Tạo playlist",
  icon: <i className='bx bx-plus icon'></i>,
  url: "/ss"
}
export default function ListItem({ data }) {
  const context = useContext(CloseContext)
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const userData = useSelector(userDataSelector);

  const handler = () => {
    console.log("123456");
    if (userData.name) {
      context.toggleSetIsClose(true);
    } else {
      navigate('/login');
    }
    // setVisible(true);
  };
  const closeHandler = () => {
    // setVisible(false);
    context.toggleSetIsClose(false);
    console.log("closed");
  };

  return (
    <ul className="menu-links">
      {data.map((item, index) => <Item key={index} item={item} />)}
      <li className="nav-link" style={{ cursor: 'pointer' }} onClick={handler}>
        {item.icon}
        <List item={item} closeHandler={closeHandler} visible={context.isClose} />
      </li>
    </ul>
  )
}