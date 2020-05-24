import React from 'react';

function Selector(_props) {
  return (
    <select>
      {_props.options.map(item,idx=><option idx={idx} val={item.val}>{item.text}</option>)}
    </select>
  )
}
