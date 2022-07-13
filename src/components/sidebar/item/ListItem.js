import Item from './Item'

export default function ListItem({ data }) {
  return (
    <ul className="menu-links">
      {data.map((item, index) => <Item key={index} item={item} />)}
    </ul>
  )
}