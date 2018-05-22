import React from 'react';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';

import CallToAction from '../components/CallToAction';
import ContactForm from '../components/ContactForm';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';


const FAQ = (props) => {
  const { data } = props;
  const partners = [
    'codeRotterdam',
    'jinc',
    'microsoft',
    'newDutchSchool',
    'rawdata',
    'rotterdamPartners',
    'waag',
    'wetech',
  ];

  return (
    <div>
      <Helmet
        title="FAQ | Offcourse"
        meta={[
          { name: 'description', content: 'Offcourse is an open source platform for crowdsourced learning and knowledge sharing.' },
        ]}
      />
      <PageHeader
        title="FAQ"
        subtitle="Frequently Asked Questions about the Offcourse platform"
      />
      <Section>
        <div className="ui middle aligned grid container">
          <div className="centered row">
            <div className="sixteen wide tablet ten wide computer column">
              <h1 id="frequentlyaskedquestionsfaq">Frequently Asked Questions (FAQ)</h1>

              <ul>
                <li>Bugs</li>
                <li>Your account</li>
                <li>Courses</li>
                <li>User support</li>
                <li>Offcourse</li>
              </ul>

                <h2 id="bugs">Bugs</h2>

                <h4 id="imtryingtosignupforoffcoursebutmyverificationcodeisntaccepted">I’m trying to sign up for Offcourse, but my verification code isn’t accepted</h4>

                <p>This is a bug. Your verification code is probably accepted. Please try to sign in using the sign up button in the upper right corner of the screen. If this doesn’t work, please let us know <a href="https://docs.google.com/forms/d/e/1FAIpQLSdEFLYdNiiEyjmLyQWoMAfLTssPxQGpeoM2lU8GvAHy3D1i_w/viewform">through this form</a>.</p>

                <h4 id="iaddedcontentbutitisnotvisibleyet">I added content but it is not visible yet.</h4>

                <p>It takes about 1 minute for the platform to gather and display the content. Just wait and reload.</p>

                <h4 id="imadeacoursebuticantfinditontheplatform">I made a course, but I can’t find it on the platform</h4>

                <p>The homepage only shows a maximum of 20 courses. Click on your name in the upper right corner. You should see your course now. If this doesn’t work, please let us know <a href="https://docs.google.com/forms/d/e/1FAIpQLSdEFLYdNiiEyjmLyQWoMAfLTssPxQGpeoM2lU8GvAHy3D1i_w/viewform">through this form</a>.</p>

                <h4 id="imtryingtocreateaforkbuttheplatformdoesntrespond">I'm trying to create a fork, but the platform doesn't respond</h4>

                <p>Please check if you used any special characters in your user name. If you did, the platform doesn't recognize your user name correctly and you can't fork. We can change your user name, send an email to <a href="mailto:contact@offcourse.io">contact@offcourse.io</a>.</p>

                <h2 id="youraccount">Your account</h2>

                <h4 id="ilostmypasswordhowdoiresetitcreateanewone">I lost my password. How do I reset it/ create a new one?</h4>

                <p>Send an email to <a href="mailto:contact@offcourse.io">contact@offcourse.io</a>.</p>

                <h4 id="howcanicommunicatewithotherusers">How can I communicate with other users?</h4>

                <p>We are working on a tool for internal communication. We will announce any new features to the platform via <a href="http://eepurl.com/clGDdz">our monthly mailing</a>.</p>

                <h4 id="howdoideletemyaccount">How do I delete my account?</h4>

                <p>If you no longer want to use the platform you can simply log out. We will not share any of your personal details with third parties. If you want us to delete your account completely, send an email to <a href="mailto:contact@offcourse.io">contact@offcourse.io</a>.</p>

                <h2 id="courses">Courses</h2>

                <h4 id="howcanicreatemyowneditothercourses">How can I create my own/ edit other courses?</h4>

                <p>To create a course sign in and click ‘Create Course’ in the top menu bar. To edit other courses click and go to a particular course and click ‘Edit’ on the bottom left corner of the card. Also, check our guidelines on <a href="https://gitlab.com/offcourse/support/blob/master/How%20to%20create%20a%20course%20on%20Offcourse.md">How to create a course on Offcourse</a>.</p>

                <h4 id="doihavetologintoviewaddeditthecourses">Do I have to log in to view/ add/ edit the courses?</h4>

                <p>You can view courses without signing in. For editing courses or adding new courses sign in is required.</p>

                <h4 id="howdoifindtopicsiaminterestedin">How do I find topics I am interested in?</h4>

                <p>Every course has automated tags that explain what the course is about. By clicking on a tag you will get all courses about that topic.</p>

                <h4 id="whatistheideabehindthecheckpoints">What is the idea behind the “checkpoints”?</h4>

                <p>Checkpoints are used for tasks. You can mark tasks when they are done.</p>

                <h4 id="howcanicompletetasks">How can I complete tasks?</h4>

                <p>Click the checkpoint on the left side of the task to complete it.</p>

                <h4 id="howcanishareanyofthecoursematerialswithsomeoneelse">How can I share any of the course materials with someone else?</h4>

                <p>Use ‘Get URL’ at the bottom right of a card to copy the URL. You can now share it directly. Another way of sharing links is through Twitter and Facebook. Use the Twitter and Facebook icons at the bottom of the card.</p>

                <h2 id="usersupport">User support</h2>

                <h4 id="whatififindabugontheplatform">What if I find a “bug” on the platform?</h4>

                <p>We are in beta stage of development. We are happy to receive feedback you have on the platform that can help us improve. Please report any bugs on the platform <a href="https://docs.google.com/forms/d/e/1FAIpQLSdEFLYdNiiEyjmLyQWoMAfLTssPxQGpeoM2lU8GvAHy3D1i_w/viewform">through this form</a>.</p>

                <h4 id="ineedhelpsupportwheredoigo">I need help/ support, where do I go?</h4>

                <p>You can get our support by contacting us trough this form.  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdEFLYdNiiEyjmLyQWoMAfLTssPxQGpeoM2lU8GvAHy3D1i_w/viewform">through this form</a>.</p>

                <h4 id="ihaveanidearequestforanewfeaturehowcanitellyoumyideas">I have an idea/ request for a new feature, how can I tell you my ideas?</h4>

                <p>Send us your (feature) requests <a href="https://docs.google.com/forms/d/e/1FAIpQLSdEFLYdNiiEyjmLyQWoMAfLTssPxQGpeoM2lU8GvAHy3D1i_w/viewform">through this form</a>.</p>

                <h2 id="offcourse">Offcourse</h2>

                <h4 id="whatistheideabehindoffcourse">What is the idea behind Offcourse?</h4>

                <p>Offcourse is an open source platform that facilitates what we call crowdlearning. Crowdlearning to us is the believe that if everybody shares what they know in one place, everybody can learn what they want.</p>

                <h4 id="whatcancanidoontheplatform">What can can I do on the platform?</h4>

                <ul>
                  <li>Collect and save links to the web's best learning resources for your own learning</li>
                  <li>Track progress of your learning</li>
                  <li>Learn from others by tweaking a collection of links made by someone else and make it your own</li>
                  <li>Create course materials so you can share what you know with others on the platform</li>
                  <li>Share knowledge with others outside the platform through direct link sharing and social sharing</li>
                </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <CallToAction
          title="Share what you know. Show who you are."
          action={
            <button
              type="button"
              className="ui huge button positive"
              onClick={() => { navigateTo('/sign-up'); }}
            >
               JOIN NOW
            </button>
          }
        />
      </Section>
    </div>
  );
};

export default FAQ;
