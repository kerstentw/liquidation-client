import React from 'react';
import NavLinks from '../UtilityComponents/NavLinks';

function Logo(_props) {
  return (
    <span className="name_bar">
      {_props.name}
    </span>
  )
}

class Header extends React.Component {
  constructor(_props) {
    super(_props)
    this.props = _props;
  }

  render() {
    return (
      <div>
        <Logo name="OrFeed: Liquidations" />
        <NavLinks links={this.props.links}/>
      </div>
    )
  }

}

export default Header;
