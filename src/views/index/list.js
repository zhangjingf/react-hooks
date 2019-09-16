import React, { useState, useEffect } from 'react';

function Item(prop) {
  useEffect(() => {
    console.log(prop);
  });

  return (
    <React.Fragment>
      {prop.list.map((item, index) => {
        return (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => prop.deleteItem(index)}>删除</button>
          </li>
        );
      })}
    </React.Fragment>
  );
}

export function List(prop) {
  const arr = [
    { name: '杨幂', id: 0 },
    { name: '李易峰', id: 1 },
    { name: '李易峰', id: 2 }
  ];
  const [list, setList] = useState(arr);

  return (
    <div>
      <ul>
        <Item
          deleteItem={index => {
            list.splice(index, 1)
            setList(list)
          }}
          list={list}
        />
      </ul>
      <button
        onClick={() => setList([...list, { name: '张天赐', id: list.length }])}
      >
        增加
      </button>
    </div>
  );
}
