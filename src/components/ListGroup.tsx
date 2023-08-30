import { useState } from "react";
import { ListGroupProps } from "./ListGroup.types";

const ListGroup = ({ title, items, onSelectItem }: ListGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{title}</h1>
      <ul className="list-group">
        {items.map((item, i) => {
          return (
            <li
              className={
                selectedIndex == i
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={i}
              value={item}
              onClick={() => {
                setSelectedIndex(i);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListGroup;
