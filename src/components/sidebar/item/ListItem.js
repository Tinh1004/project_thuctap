import Item from './Item'

const item = {
  title: "Tạo playlist",
  icon: <i className='bx bx-plus icon'></i>,
  url: "/dsdsa"
}
export default function ListItem({ data }) {

  return (
    <ul className="menu-links">
      {data.map((item, index) => <Item key={index} item={item} />)}
      <li className="nav-link" style={{ cursor: 'pointer' }} onClick={() => { console.log("Long Occho") }}>
        {item.icon}
        <span className="text nav-text">{item.title}</span>
      </li>
    </ul>
  )
}