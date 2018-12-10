import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="/images/frank1"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Frankline Kbei</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1409 esters Rd Irving,TX</p>
            <h5>Phone</h5>
            <p>(410) 504-3094</p>
            <h5>Email</h5>
            <p>temkebei@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2002}
              endYear={2004}
              schoolName="University of Buea - Cameroon"
              schoolDescription="Associate in Marketing"
               />

               <Education
                 startYear={2017}
                 endYear={2018}
                 schoolName="Per Scolas"
                 schoolDescription="Comptia A+ Hardware and Networking"
                  />

                  
               <Education
                 startYear={2018}
                 endYear={2018}
                 schoolName="Southern Methodist College"
                 schoolDescription="Full Stack Web Development"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2004}
              endYear={2013}
              jobName="Sales Coordinator/Manager"
              jobDescription=" Coordinate and report all sales transaction, supervised all loading and unloading of all incoming and
              outgoing shipments, Quote and create customer’s accounts, keep track of shipment and update
              customers with shipment details, Update and report sales team weekly, monthly, quarterly and
              yearly performance."
              />

              <Experience
                startYear={2014}
                endYear={2018}
                jobName="Customer Service Lead"
                jobDescription="Responsible for my team performance, my gates and all the flights that comes in and out of the zone
                as well as ensuring teamwork and communication within the team. Fixed minor Pc problems at the
                gates or tickets counters, troubleshooting Gate PC, assign printers for boarding passes, change
                printer papers, tuners and quick gate fixed or escalate to IT department."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
