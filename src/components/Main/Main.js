import React, { Component } from "react";
import "./Main.css";

import {
  Image,
  Header,
  Grid,
  Icon,
  Dimmer,
  Button,
  Divider
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import Utils from "../../Utils/Utils";

class Main extends Component {
  state = {};

  componentDidMount() {
    // style dimmer backgrounds
    let dims = document.querySelectorAll("#project-dimmer");
    for (let e of dims) {
      e.children[0].style.backgroundColor = Utils.convertHex(
        this.props.color,
        90
      );
    }
  }

  render() {
    return (
      <div className="Main">  
        <div className="Main-content">
          <Block id="about" title="About Myself">
          Dynamic, qualified, and highly ethical student who completed an A.S. in Computer Information Systems, with experience in object-orientated programming and software design patterns, seeks to leverage my degree and experience into a new position in software/web development. Highly motivated to work, and continuously seeks out challenges in high-pressure, deadline-driven environments.
          </Block>
          <Block id="skills" title="Skills">
            <Grid
              columns="four"
              divided
              style={{ textAlign: "center" }}
              stackable
              id="skills-grid"
            >
              <Grid.Row>
                <GridImageCol src="/img/html5.png" title="HTML5" />
                <GridImageCol src="/img/css3.png" title="CSS3" />
                <GridImageCol src="/img/js.png" title="JavaScript" />
                <GridImageCol src="/img/react.png" title="ReactJS" />
              </Grid.Row>
              <Grid.Row>
                <GridImageCol src="/img/oop.png" title="OO Programming" />
                <GridImageCol src="/img/mongodb.png" title="MongoDB" />
                <GridImageCol src="/img/node.png" title="Node" />
                <GridImageCol src="/img/git.png" title="Git" />
              </Grid.Row>
            </Grid>
          </Block>
          <Block id="projects" title="Personal Projects">
            <Grid>
              <GridColProject
                src="/media/color-flex-menu.png"
                iconName={["github", "GitHub"]}
                title="color-flex-menu"
                href="https://github.com/ConnorCIngram/color-block-menu-react-d3-scale-chromatic"
                view={["https://color-flex-menu.herokuapp.com/", "Heroku", "file code"]}
              />
              <GridColProject
                src="/media/d3_project.png"
                iconName={["code", "bl.ocks"]}
                title="D3 Visualizations"
                href="https://bl.ocks.org/ConnorIngram"
              />
              <GridColProject
                src="/media/this-site.png"
                iconName={["home", "Github Pages"]}
                title="This Site"
                href="https://ConnorCIngram.github.io"
              />
            </Grid>
          </Block>
          <Block id="contact" title="Contact Me">
            <Grid
              columns="two"
              stackable
              style={{ color: this.props.color }}
              textAlign="left"
            >
              <Grid.Row>
                <GridIconCol
                  color={this.props.color}
                  title="GitHub"
                  href="https://github.com/connorcingram/"
                  icon="github"
                />
                <GridIconCol
                  color={this.props.color}
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/connor-ingram-2b0848163/"
                  icon="linkedin in"
                />
              </Grid.Row>
              <Grid.Row>
                <GridIconCol
                  color={this.props.color}
                  title="EMail"
                  href="mailto:connorcingram@gmail.com"
                  icon="envelope outline"
                />
                <GridIconCol
                  color={this.props.color}
                  title="Resume"
                  navLink="/resume"
                  icon="file alternate outline"
                />
              </Grid.Row>
              <Grid.Row>
                <GridIconCol
                  color={this.props.color}
                  title="(413) 427-9785"
                  href="tel:4134279785"
                  icon="phone"
                />
              </Grid.Row>
            </Grid>
          </Block>
        </div>
      </div>
    );
  }
}

const Block = props => {
  return (
    <div className="block" id={props.id}>
      <div className="container">
        <div id="block-header">
        <Divider horizontal id="block-header" style={{ color: props.color || "#333333", fontWeight: "bolder", fontSize: '1.3rem' }}>
          {props.title}
        </Divider>
        </div>
        <div id="block-content">{props.children}</div>
      </div>
    </div>
  );
};

const GridImageCol = props => {
  return (
    <Grid.Column>
      <Header as="h3">
        <Image src={props.src} style={{pointerEvents: 'none'}}/> {props.title}
      </Header>
    </Grid.Column>
  );
};
const GridIconCol = props => {
  return (
    <Grid.Column
      style={{
        color: props.color
      }}
    >
      {props.navLink && (
        <NavLink to={props.navLink}>
          <Icon
            link
            name={props.icon}
            size="huge"
            style={{ color: props.color }}
          />
        </NavLink>
      )}
      {props.href && (
        <Icon
          link
          name={props.icon}
          size="huge"
          onClick={e => (window.location.href = props.href)}
        />
      )}
      <Header as="h4" icon style={{ pointerEvents: "none" }}>
        {props.title}
      </Header>
    </Grid.Column>
  );
};
class GridColProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          {this.props.title}
        </Header>
        <Button.Group>
          <Button
            icon
            inverted
            as="a"
            href={this.props.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name={this.props.iconName[0]} /> {this.props.iconName[1]}
          </Button>
          {this.props.view && (
            <Button
              inverted
              as="a"
              href={this.props.view[0]}
              rel="noopener noreferrer"
              target="_blank"
            >
            {this.props.view[2] && <Icon name={this.props.view[2]} />}
            {this.props.view[1]}
            </Button>
          )}
        </Button.Group>
      </div>
    );
    return (
      <Grid.Column computer={8} tablet={8} mobile={16} >
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          src={this.props.src}
          id="project-dimmer"
        />
      </Grid.Column>
    );
  }
}
export default Main;
