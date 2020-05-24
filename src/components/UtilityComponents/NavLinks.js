import React from 'react';


function NavLinks(_props) {
  return (
    <div>
      {_props.links.map(item=><a href={item.href} >{item.text}</a>)}
    </div>
  )
}

export default NavLinks;
