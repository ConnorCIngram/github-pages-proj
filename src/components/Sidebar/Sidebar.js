import React, { Component } from "react";
import "./Sidebar.css";

import { Menu, Header, Image } from "semantic-ui-react";
import { NavHashLink as NavLink } from "react-router-hash-link";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: this.props.active };
  }
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    const URL = 'https://api.github.com/users/ConnorCIngram';
    fetch(URL, {
      mode: 'cors'
    })
    .then(res => res.json())
    .then(data => {
      this.setState({pic: data.avatar_url})
    });
  }

  render() {
    const activeItem = this.props.active || "home";
    return (
      <div className="Sidebar" style={{ backgroundColor: this.props.color }}>
        <div id="sidebar-top">
          <Image
            src={this.state.pic}
            size="small"
            circular
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              pointerEvents: "none",
              border: '2px solid white'
            }}
          />
          <Header as="h2" inverted>
            Connor Ingram
            <Header.Subheader>
              Technical Consultant<p>and Web Enthusiast</p>
            </Header.Subheader>
          </Header>
          <div id="sidebar-links">
            <Menu text inverted>
              <Menu.Item
                as="a"
                href="https://github.com/ConnorCIngram"
                icon="github"
              />
              <Menu.Item
                as="a"
                href="https://www.linkedin.com/in/connor-ingram-2b0848163/"
                icon="linkedin"
              />
              <Menu.Item
                as="a"
                href="mailto:connorcingram@gmail.com"
                icon="mail"
              />
            </Menu>
          </div>
        </div>

        <div id="sidebar-menu">
          <Menu
            text
            vertical
            style={{ width: "100%", color: this.props.color }}
          >
            <Menu.Item
              name="about"
              active={activeItem === "about"}
              onClick={this.handleItemClick}
              id="sidebar-menu-item"
              as={NavLink}
              to="/#about"
              exact
            />
            <Menu.Item
              name="skills"
              active={activeItem === "skills"}
              onClick={this.handleItemClick}
              id="sidebar-menu-item"
              as={NavLink}
              to="/#skills"
              exact
            />
            <Menu.Item
              name="projects"
              active={activeItem === "projects"}
              onClick={this.handleItemClick}
              id="sidebar-menu-item"
              as={NavLink}
              to="/#projects"
              exact
            />
            <Menu.Item
              name="contact"
              active={activeItem === "contact"}
              onClick={this.handleItemClick}
              id="sidebar-menu-item"
              as={NavLink}
              to="/#contact"
              exact
            />
            <Menu.Item
              name="resume"
              active={activeItem === "resume"}
              onClick={this.handleItemClick}
              id="sidebar-menu-item"
              as={NavLink}
              to="/resume"
              activeClassName=""
              exact
            />
          </Menu>
        </div>
      </div>
    );
  }
}

export default Sidebar;
