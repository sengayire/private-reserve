import React, { Component } from 'react';
import 'dotenv/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faDollarSign,
  faTrophy,
  faClock,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCommentDots,
  faQuestionCircle,
} from '@fortawesome/free-regular-svg-icons';
import Layout from '../Layout';
import './Home.scss';

export class Home extends Component {
  state = {
    welcome: 'Welcome to Authors Haven',
    imageRectangle: 'w_400,ar_16:9,c_fill,g_auto,e_sharpen',
  };

  render() {
    const { welcome } = this.state;
    return (
      <Layout>
        <div className='home-content-container'>
          <div className='content'>
            <div className='testimonial'>
              <div>
                <p>
                  Eros is the best. I get the best clients from Eros and I love
                  it. I will always advertise with Eros!
                </p>
                <h3>VIP Kylie in Hawaii</h3>
              </div>
            </div>
            <div className='testimonial'>
              <div>
                <p>As always, Eros goes above and beyond the call of duty.</p>
                <h3>Eileen in San Francisco</h3>
              </div>
            </div>
            <div className='testimonial'>
              <div>
                <p>
                  I like Eros, there is a difference in the viewers. Eros is
                  well known and it is very classy.
                </p>
                <h3>Isabella in Tampa</h3>
              </div>
            </div>
          </div>
          <div>
            <h1>Why ErosAds? Quality makes the Difference.</h1>
          </div>
          <div className='content'>
            <div className='testimonial-2'>
              <div className='card-content'>
                <div>
                  <FontAwesomeIcon
                    icon={faStar}
                    color='white'
                    className='icon'
                  />
                </div>
                <div>
                  {' '}
                  <h4>Quality Viewers & Quality Results</h4>
                  <p>
                    Our traffic is targeted to bring you the viewers who are
                    interested in booking an appointment. Our dedicated team
                    works hard to have Eros Guide optimized for top placement on
                    search engines. This means when viewers are looking for
                    entertainers using search words that match what we
                    advertise, Eros Guide will be in the top results.
                  </p>
                </div>
              </div>
            </div>
            <div className='testimonial-2'>
              <div className='card-content'>
                <div>
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    color='white'
                    className='icon'
                  />
                </div>
                <div>
                  <h4>Personalized Customer Service</h4>
                  <p>
                    Erosads.com is your online resource for managing your Eros
                    Guide advertising – and it’s available 24/7. As an
                    advertiser, you also have personal customer service
                    available to you – at no additional cost! We have a Customer
                    Service staff that has genuine interest in making your
                    advertising on our site successful. We encourage you to send
                    us an email or contact us through our live chat, to speak
                    with one of our highly trained representatives to make sure
                    that you are taking advantage of all the Eros Guide has to
                    offer.
                  </p>
                </div>
              </div>
            </div>
            <div className='testimonial-2'>
              <div className='card-content'>
                <div>
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    color='white'
                    className='icon'
                  />
                </div>
                <div>
                  <h4>Save Money</h4>
                  <p>
                    Every month we are sending out communications for you to
                    save money on special services and fun promotional offers.
                    We do this through newsletters and our dedicated Twitter
                    account, @StatusEG. Any time you contact us, be sure to ask
                    your representative what special deals we are currently
                    offering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='content'>
            <div className='testimonial-2'>
              <div className='card-content'>
                <div>
                  <FontAwesomeIcon
                    icon={faTrophy}
                    color='white'
                    className='icon'
                  />
                </div>
                <div>
                  <h4>The Ultimate Erotic Entertainment</h4>
                  <p>
                    We have been online since 1997 and are the world’s largest
                    adult directory with over 100 locations worldwide. We pride
                    ourselves in quality viewers, quality results, customer
                    service, and advertiser satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className='testimonial-2'>
              <div className='card-content'>
                <div>
                  <FontAwesomeIcon
                    icon={faClock}
                    color='white'
                    className='icon'
                  />
                </div>
                <div>
                  <h4>Make Changes Whenever</h4>
                  <p>
                    You can log into erosads.com to update your ad and manage
                    your account at any time. We have staff available 7 days a
                    week (hours vary) to assist you as well. We know how
                    important your time is to you, as it is to us!
                  </p>
                </div>
              </div>
            </div>
            <div className='testimonial-2'>
              <div className='card-content'>
                <div>
                  <FontAwesomeIcon
                    icon={faLock}
                    color='white'
                    className='icon'
                  />
                </div>
                <div>
                  <h4>Your Privacy is Our Priority</h4>
                  <p>
                    You can trust us to protect your personal information and
                    treat it with the utmost respect.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1>Why ErosAds? Quality makes the Difference.</h1>
          <div className='content'>
            <div className='testimonial-2'>
              <div className='card-content'>
                <div>
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    color='white'
                    className='icon'
                  />
                </div>
                <div>
                  <h4>What does my purchase cover?</h4>
                  <p>
                    We offer a wide variety of advertising options. Most
                    advertisers start with a standard ad or visiting ad, and
                    then customize their ads with such options as VIP upgrades
                    or Premier Services to drive even more traffic to them. Both
                    standard and visiting ads include an elegant full page ad
                    with up to 8 photos.
                  </p>
                </div>
              </div>
            </div>
            <div className='testimonial-2'>
              <div className='card-content'>
                <div>
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    color='white'
                    className='icon'
                  />
                </div>
                <div>
                  <h4>What types of ads do you offer?</h4>
                  <p>
                    By purchasing an ad on the Eros Guide, you have secured a
                    beautifully laid-out advertisement on the premier website
                    for adult entertainment services. Since 1997 we have been
                    dedicated to bringing you high quality traffic, and it
                    shows. Of course every provider is unique and we cannot
                    guarantee you a specific number of leads from your
                    advertisement. But we do know what it takes to maintain
                    great site traffic – both quality and quantity – and what
                    types of things you can do to take maximum advantage of that
                    traffic. Which is why at Eros you have access to the best
                    customer service and sales staff in the industry. We are
                    here to answer your questions and help you make the most of
                    your advertising experience with the Eros Guide.
                  </p>
                </div>
              </div>
            </div>
            <div className='testimonial-2'>
              <div className='card-content'>
                <div>
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    color='white'
                    className='icon'
                  />
                </div>
                <div>
                  <h4>Am I charged for changes to my ad?</h4>
                  <p>
                    While there is an additional fee for animated thumbnails and
                    certain additional categories, there is no charge for
                    changing any of your other ad content such as text, photos,
                    contact information, location information, or physical
                    attributes. You can make as many changes as you want, as
                    often as you want. In fact, we encourage you to keep your ad
                    fresh with up-to-date content. Doing so builds confidence in
                    your potential clients that the information on your ad is
                    more likely to be current and accurate.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <h1>Ready to get your ad online with Eros Guide? Register now!</h1>
          <h2>Your information is secure and the process is easy!</h2>
          <p>
            Your privacy matters to us. We keep your information secure & will
            only use it to contact you regarding your account. This information
            will NOT be publicized anywhere else online.
          </p>
        </div>
      </Layout>
    );
  }
}

export default Home;
