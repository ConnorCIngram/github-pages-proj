import React, { Component } from 'react';
import {Responsive, Image, Header,Button, Menu} from 'semantic-ui-react';
import './Banner.css';
import { Link } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";

export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {bannerTop: true}
    this.ref = React.createRef();
  }

  componentDidMount() {
    const self = this;
    const ref = this.ref;
    window.addEventListener("scroll", function() {
      if (this.pageYOffset > 54 && self.state.bannerTop) {
        self.setState({bannerTop: false});
        ref.className = 'Banner Scroll';
        // ref.firstChild.firstChild.style.visiblity = 'hidden';
        // ref.firstChild.firstChild.style.width = 0;
      }
      if (this.pageYOffset <= 50 && !self.state.bannerTop) {
        self.setState({bannerTop: true});
        ref.className = "Banner";
        ref.firstChild.firstChild.style.visiblity = 'visible';
        ref.firstChild.firstChild.style.width = 'auto'
      }
    });
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
        return (
          <div style={{gridColumn: '1/3'}}>
          <div id='home' style={{top: 0, left: 0}}/>
            <div className="Banner" style={{ backgroundColor: this.props.color }} ref={r => this.ref = r}>
              <div
                className="container"
                style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gridTemplateRows: '1fr' }}
              >
                <div style={{ gridColumn: 1 }} id='banner-img'>
                  <Responsive {...{ maxWidth: 900 }}>
                    <Image
                      src={this.state.pic}
                      circular
                      verticalAlign="middle"
                      size="tiny"
                    />
                  </Responsive>
                </div>
                <span style={{ gridColumn: 2, alignSelf: "center", gridRow: 1 }}>
                  <Header as="h1" inverted id="banner-header">
                    Connor Ingram
                    <Header.Subheader id="banner-subheader">
                      Technical Consultant
                    </Header.Subheader>
                  </Header>
                </span>
                <Responsive {...{maxWidth: 900}} style={{gridColumn: 3, alignSelf: 'center', gridRow: 1}}>
                  <MobileNav color={this.props.color}/>
                </Responsive>
              </div>
            </div>
            </div>
        )
    }
}

function prevent(e) {
  e.preventDefault();
}

class MobileNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      icon: 'bars',
      menuActive: false
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick() {
    const app = document.getElementById('App');
    this.setState({icon:  (this.state.icon === 'bars' ? 'close':'bars'), menuActive: !this.state.menuActive },() => {
      if (this.state.menuActive) {
        app.addEventListener("mousewheel", prevent, false);
        app.addEventListener("touchmove", prevent, false);
      }
      else {
        app.removeEventListener("mousewheel", prevent);
        app.removeEventListener("touchmove", prevent);
      }
    })
  }

  render() {
    const menuClass = ["mobile-menu"];
    if (this.state.menuActive) menuClass.push("active")
    return (
      <div>
        <div className={menuClass.join(" ")} style={{backgroundColor: this.props.color, textAlign: 'right'}}>
          <Menu text vertical inverted style={{fontSize: '1.5rem', width: '100%', fontWeight: 700}}>
            <Menu.Item onClick={this.handleItemClick} as={NavLink} to='/#home' >Home</Menu.Item>
            <Menu.Item onClick={this.handleItemClick} as={NavLink} to='/#about'>About</Menu.Item>
            <Menu.Item onClick={this.handleItemClick} as={NavLink} to='/#skills'>Skills</Menu.Item>
            <Menu.Item onClick={this.handleItemClick} as={NavLink} to='/#projects'>Projects</Menu.Item>
            <Menu.Item onClick={this.handleItemClick} as={NavLink} to='/#contact'>Contact</Menu.Item>
            <Menu.Item onClick={this.handleItemClick} as={Link} to='/resume'>Resume</Menu.Item>
          </Menu>
        </div>
        <Button
          id="mobile-nav-menu-btn"
          size='massive'
          icon={this.state.icon} inverted basic onClick={this.handleItemClick}
        />
      </div>
    );
  }
}