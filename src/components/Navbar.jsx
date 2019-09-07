import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="white" light expand="md">
          <NavbarBrand style={{ color: "green" }}>Osahan Land</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="m-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <b>HOME</b>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Home With Search</DropdownItem>
                  <DropdownItem>Home With Map</DropdownItem>
                  <DropdownItem>Home With Property Info</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <b>PROPERTIES</b>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Properties Grid</DropdownItem>
                  <DropdownItem>Properties List</DropdownItem>
                  <DropdownItem>Properties Single Slider</DropdownItem>
                  <DropdownItem>Properties Single Gallery</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <b>AGENCY</b>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Agency List</DropdownItem>
                  <DropdownItem>Agency Profile</DropdownItem>
                  <DropdownItem>Agents</DropdownItem>
                  <DropdownItem>Agent Profile</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <b>BLOG</b>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Blog</DropdownItem>
                  <DropdownItem>Blog Single</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <b>MY ACCOUNT</b>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>User Profile</DropdownItem>
                  <DropdownItem>Social Profile</DropdownItem>
                  <DropdownItem>My Properties</DropdownItem>
                  <DropdownItem>Favorite Properties</DropdownItem>
                  <DropdownItem>Add Property</DropdownItem>
                  <DropdownItem>Property Type</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <b>PAGES</b>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>About us</DropdownItem>
                  <DropdownItem>FAQ</DropdownItem>
                  <DropdownItem>Contact</DropdownItem>
                  <DropdownItem>404 Page</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>

            <NavItem>
              <NavLink
                href="/components/"
                style={{ width: 100, color: "green" }}
              >
                Sign in
              </NavLink>
            </NavItem>
            <Button color="success" style={{ width: 100 }}>
              Sign up
            </Button>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
