import React, { Component } from "react";
import "./Resume.css";

import { Header, Progress, Divider, Grid, Menu, List, Button, Segment, GridColumn } from "semantic-ui-react";
import Utils from "../../Utils/Utils";
class Resume extends Component {
  state = {showRefs: false};

  componentDidMount() {
    let bars = document.querySelectorAll(".progress#resume-skills-bar");
    const color = Utils.darkenColor(this.props.color, 100, 0.9);
    for (let bar of bars) {
      bar.firstChild.style.background = color;
    }
    setTimeout(() => {
      document
        .getElementById("App")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }, 550);
  }
  render() {
    return (
      <div id="resume">
        <div id="resume-content">
          <div id="resume-center">
            <div id="resume-center-block">
              <div className="container">
                <div id="resume-header">
                  <Header as='h3'>Associate of Science in Computer Information Systems</Header>
                  <Divider />
                </div>
                <div id="resume-subcontent">
                  Dynamic, qualified, and highly ethical student who completed an A.S. in Computer Information Systems, with experience in object-orientated programming and software design patterns, seeks to leverage my degree and experience into a new position in software/web development. Highly motivated to work, and continuously seeks out challenges in high-pressure, deadline-driven environments.
                </div>
              </div>
            </div>
            <div id="resume-center-block">
              <div className="container">
                <div id="resume-header">
                  <Header as='h3'>Areas of Expertise</Header>
                  <Divider />
                </div>
                <div id="resume-subcontent">
                  <Grid columns={2} stackable>
                  <Grid.Column>
                    <List as='ul'>
                      <List.Item as='li'>Familiar with the latest Windows, Mac, and UNIX operating systems.</List.Item>
                      <List.Item as='li'>Familiar with Object-Orientated Programming, and Agile development methodologies.</List.Item>
                      <List.Item as='li'>Comfortable in both GUI and command-line environments</List.Item>
                      <List.Item as='li'>Strive in both team-driven and solo work.</List.Item>
                    </List>
                    </Grid.Column>
                    <Grid.Column>
                    <List as='ul'>
                      <List.Item as='li'>Can provide tier II customer support.</List.Item>
                      <List.Item as='li'>Proficient with both the Microsoft Office and Adobe Creative Suite</List.Item>
                      <List.Item as='li'>Understanding of modern web practices and frameworks.</List.Item>
                      <List.Item as='li'>Able to pick up and learn new tools and languages quickly.</List.Item>
                    </List>
                    </Grid.Column>
                  </Grid>
                </div>
              </div>
            </div>
            <div id="resume-center-block">
              <div className="container">
                <div id="resume-header">
                  <Header as='h3'>Education</Header>
                  <Divider />
                </div>
                <div id="resume-subcontent">
                  <Header as='h5'>Credits towards Bachelors of Science, <div id='highlight'>University of Massachusetts Amherst</div>, Amherst, Massachusetts, Computer Science (2018)</Header>
                  <Header as='h5'>Associate of Science, <div id='highlight'>Holyoke Community College</div>, Holyoke, Massachusetts, Computer Information Systems (2016)</Header>
                </div>
              </div>
            </div>
            <div id="resume-center-block">
              <div className="container">
                <div id="resume-header">
                <Header as='h3'>Professional Experience</Header>
                <Divider />
                </div>
                <div id="resume-subcontent">
                <Grid stackable columns={2} style={{width: '100%', display: 'block'}} divided textAlign="center">
                <Grid.Row>
                <Grid.Column style={{width: '100%'}}>
                <div>
                  <Header as='h5' style={{display: 'inline'}}><div id='highlight'>Machado Consulting</div></Header>
                  <div style={{display: 'inline', fontSize: '0.8rem', paddingLeft: '0.5rem'}}>2018-2019</div>
                  <div style={{fontStyle: 'oblique'}}>
                  Information Technology and Services
                  <p>Worcester, MA 01608</p>
                  </div>
                  </div>
                </Grid.Column>
                {/* <GridColumn>
                  <div>
                  <Header as='h5' style={{display: 'inline'}}><div id='highlight'>Our Town Variety</div></Header>
                  <div style={{display: 'inline', fontStyle: 'oblique', fontSize: '0.8rem', paddingLeft: '0.5rem'}}>2013-2018</div>
                  <div style={{paddingLeft: '1rem', fontStyle: 'oblique'}}>
                  Cashier
                  <p>Ludlow, MA 01056</p>
                  </div>
                  </div>
                </GridColumn> */}
                </Grid.Row>
                </Grid>
                </div>
              </div>
            </div>
            {/* <div id="resume-center-block">
              <div className="container" style={{textAlign: "center"}}>
                <Button secondary basic onClick={() => this.setState({showRefs: !this.state.showRefs}, () => {

                  document.getElementById("resume-refs").className = this.state.showRefs ? "resume-refs active" : "resume-refs inactive"
                })}>Professional References</Button>
                <div className="resume-refs inactive" id="resume-refs" style={{padding: '2rem'}}>
                    <Segment vertical>
                      <List>
                        <List.Item icon='users' content='James Harrington' />
                        <List.Item icon='marker' content='Ludlow, MA' />
                        <List.Item icon='phone' content="(413) 530-2709" />
                      </List>
                    </Segment>
                    <Segment vertical>
                      <List>
                        <List.Item icon='users' content='Lauren Dansereau' />
                        <List.Item icon='marker' content='Ludlow, MA' />
                        <List.Item icon='phone' content="(413) 388-9141" />
                      </List>
                    </Segment>
                    <Segment vertical>
                      <List>
                        <List.Item icon='users' content='Kathy Picard' />
                        <List.Item icon='marker' content='Ludlow, MA' />
                        <List.Item icon='phone' content="(413) 575-4674" />
                      </List>
                    </Segment>
                  </div>
                
              </div>
            </div> */}
          </div>
          <div id="resume-right">
          <div className="container">
          <ResumeBlock title="About">
              <Menu fluid vertical text>
                <Menu.Item>
                  <Grid columns={2}>
                    <Grid.Column width={4}>
                      <Header as='h5'>Age:</Header>
                    </Grid.Column>
                    <Grid.Column width={12}>
                      23
                    </Grid.Column>
                  </Grid>
                </Menu.Item>
                <Menu.Item>
                  <Grid columns={2}>
                    <Grid.Column width={4}>
                      <Header as='h5'>Email: </Header>
                    </Grid.Column>
                    <Grid.Column width={12}>
                      connorcingram@gmail.com
                    </Grid.Column>
                  </Grid>
                </Menu.Item>
                <Menu.Item>
                  <Grid columns={2}>
                    <Grid.Column width={4}>
                      <Header as='h5'>Located:</Header>
                    </Grid.Column>
                    <Grid.Column width={12}>
                      Ludlow, MA 01056
                    </Grid.Column>
                  </Grid>
                </Menu.Item>
                <Menu.Item>
                  <Grid columns={2}>
                    <Grid.Column width={4}>
                      <Header as='h5'>Phone:</Header>
                    </Grid.Column>
                    <Grid.Column width={12}>
                      (413) 427-9785
                    </Grid.Column>
                  </Grid>
                </Menu.Item>
                <Menu.Item>
                  <Grid columns={2}>
                    <Grid.Column width={4}>
                      <Header as='h5'>Available:</Header>
                    </Grid.Column>
                    <Grid.Column width={12}>
                      Full-Time
                    </Grid.Column>
                  </Grid>
                </Menu.Item>
              </Menu>
            </ResumeBlock>
            <ResumeBlock title="Soft Skills">
              <div id="resume-skills">
                <ResumeSkill
                  progress={90}
                  name="Problem Solving"
                  proficiency="Excellent"
                />
                <ResumeSkill
                  progress={80}
                  name="Communication"
                  proficiency="Very Good"
                />
                <ResumeSkill
                  progress={85}
                  name="Time Management"
                  proficiency="Excellent"
                />
              </div>
            </ResumeBlock>
            <ResumeBlock title="Hard Skills">
              <div id="resume-skills">
                <ResumeSkill
                  progress={75}
                  name="JavaScript"
                  proficiency="Very Good"
                />

                <ResumeSkill
                  progress={80}
                  name="HTML & CSS"
                  proficiency="Very Good"
                />
                <ResumeSkill progress={65} name="Python" proficiency="Good" />
                <ResumeSkill
                  progress={60}
                  name="Java/C++"
                  proficiency="Good"
                />
                <ResumeSkill
                  progress={55}
                  name="C"
                  proficiency="Good"
                />
                <ResumeSkill
                  progress={50}
                  name="Adobe Photoshop"
                  proficiency="Proficient"
                />
                <ResumeSkill
                  progress={80}
                  name="Microsoft Office"
                  proficiency="Very Good"
                />
                <ResumeSkill
                  progress={45}
                  name="SQL"
                  proficiency="Knowledgeable"
                />
                <ResumeSkill
                  progress={65}
                  name="Version Control"
                  proficiency="Good"
                />
              </div>
            </ResumeBlock>
            <div id="resume-download"><Button basic size='tiny' fluid as='a' href='/pdf/resume.pdf' target='_blank' el="noopener noreferrer">Click here for PDF</Button></div>

          </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Resume;

const ResumeBlock = props => (
  <div id="resume-block">
    <div id="resume-block-title">
      <Divider horizontal>{props.title}</Divider>
    </div>
    <div id="resume-block-content">{props.children}</div>
  </div>
);

const ResumeSkill = props => (
  <Progress percent={props.progress} size="tiny" id="resume-skills-bar">
    <span style={{ float: "left" }}>{props.name}</span>
    <span style={{ float: "right", fontWeight: 400 }}>{props.proficiency}</span>
  </Progress>
);
