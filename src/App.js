import React from "react";
import "./style.css";
import HouseIcon from '@material-ui/icons/House';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Button from '@material-ui/core/Button';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import HistoryIcon from '@material-ui/icons/History';
import SchoolIcon from '@material-ui/icons/School';
import TimelineIcon from '@material-ui/icons/Timeline';
import PersonIcon from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';
 
export default function App() {
  return (
    <div class="resume">
      <div class="resume_left">
      <div class="resume_profile">

      <Avatar src="https://web.facebook.com/photo?fbid=1844545479086392&set=a.300016890205933" />

      </div>
      <div class="resume_content">
      <div class="resume_item resume_info"> 
      <div class="title">
           <p class="bold">ERNEST MATENJWA</p>
           <p class="regular" style ={{color : "yellow"}}  >SOFTWARE DEVELOPER</p>
      </div>
      <p class="regular">CONTACT</p>
      <hr></hr>
     
      <p class="leftp"><EmailIcon/>alexmatenjwa@gmail.com</p>
      <p class="leftp"><LocalPhoneIcon/>0729476167</p>
      <p class="leftp"><HouseIcon></HouseIcon> Pretoria, Soshanguve 3043L</p>
      
      <Button class= "btn" variant="contained"color="#0bb5f4" href="https://www.facebook.com/profile.php?id=100005928735247"><FacebookIcon/></Button>&emsp;
      <Button class= "btn" variant="contained"color="#0bb5f4"href="https://twitter.com/Alex_Matenjwa?s=08"><TwitterIcon /></Button>&emsp;
      <Button class= "btn" variant="contained"color="#0bb5f4"href="https://www.instagram.com/alex_mathenjwa/"><InstagramIcon /></Button>
      &emsp;
      <Button class= "btn" variant="contained"color="#0bb5f4"href="https://github.com/ernestmatenjwa/icepweb_backend_APIs.git"><GitHubIcon /></Button>
      
      <br></br>
      <p class="regular">PERSONAL DETAILS</p>

      <hr></hr>
     
      <p class="leftp">Date of Birth &emsp;: 16 October 1995</p>
      <p class="leftp">Marital Status&emsp;:Single</p>
      <p class="leftp">Nationality &emsp;&emsp;:South African </p><br></br>
      
      <p class="regular">SKILLS</p>
      <hr></hr>
    
      <p class="leftp">C++</p>
      <p class="leftp">SQL Oracle/ PL SQL Oracle</p>
      <p class="leftp">AngularJS Framework</p>
      <p class="leftp">Node.js & Express framework</p>
      <p class="leftp">HTML5 & CSS3</p>
      <p class="leftp">JavaScript</p>
      <p class="leftp">PHP & MYSQL</p>
      <p class="leftp">Project Management & Systems Analysis</p>
      <p class="leftp">ReactJS framework</p>
      <br></br>
      <p class="regular">INTERESTS</p>
      <hr></hr>
      <p class="leftp">Participating in social activities</p>
      <p class="leftp">Surfing through internet</p>
      <p class="leftp">Programming</p>
      <br></br>
      <p class="regular">LANGUAGES</p>
      <hr></hr>
      <p class="leftp">English, SiSwati HL, Zulu and Xitsonga</p>
    
      </div>
      </div>
      </div>

      <div class="resume_right">
      <div class="resume_item resume_about">
        <div class="title">
        <p class="bold">PERSONAL ATTRIBUTES <PersonIcon/></p>
        <hr></hr>
        </div>
        <p>I regard myself as a person who is fascinated by challenges in all sorts of way, work or life, that is merely based on my belief that evolving and adapting to challenges is the whole concept of being competitive and that is what i want to bring to the workplace. With the less experience that i have only means i have more room for improvement especially in programming languages, I have taught myself a few and am willing to learn and be productive as a software developer.</p>
<div class="resume_item resume_work">
        <div class="title">
           <p class="bold">Work Experience <TimelineIcon/></p>
           <hr></hr>
         </div>
        <ul>
            <li>
                <div class="exp">DEC 2020 - MAY 2021</div> 
                <div class="info">
                     <p class="semi-bold">Software developer</p> 
                  <p>I was working mostly as a backend developer. I was creating APIs and databases using NodeJS and Express Framework. I managed also to familialize myself with Angular for creating HTTP services and user interface</p>
                </div>
            </li>
            <li>
              <div class="exp">JUL 2021 - Present</div>
              <div class="info">
                     <p class="semi-bold">Software developer</p> 
                  <p>I am working as Fullstack developer</p>
                </div>
            </li>
        
        </ul>
    </div>
<p class="bold">EDUCATION <SchoolIcon/></p>
<hr></hr><br></br>
<p class="min_head"><b>TERTIARY</b></p>
<p class="minT">Institution: TSHWANE UNIVERSITY OF TECHNOLOGY</p>
<p>Course &emsp;: NDip: information Technology: Software development</p>
<p>Faculty &emsp;: Information & Communication Technology(ICT)</p>
<p>Level &emsp;&emsp;: final level</p>
<p class="min_head"><b>HIGH SCHOOL</b></p>
<p>School name&emsp;&emsp;&emsp;&emsp;&emsp; :  SIBUSISIWE HIGH SCHOOL</p>
<p>Highest grade passed&emsp;: 12</p>
<p>completion  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;: 2015</p>
<p>Subject passed &emsp;&emsp;&emsp;&emsp; : Siswati Home Language,</p>
<p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;English First Additional language,</p>
<p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Mathematical literacy, Life Orientation,</p>
<p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Agricultural Science, Geography,</p>
<p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Life Sciences</p>                                           

<p class="bold">REFERENCE <HistoryIcon/></p>
<hr></hr><br></br>

<p><b>Mr. Malatji K</b></p>
<p>ICEP Mentor</p>
<p><b>Tell </b>    : +27 12 382 9598</p>
<p><b>Email</b>    : malatji@icep.ac.za</p>


<p class="bold">DECLARATION <BorderColorIcon/></p>
<hr></hr><br></br>
I, <b>Ernest Matenjwa</b> declare that all the information stated above is
complete and correct in every aspect

      </div>
      </div>
    </div>
  );
}
