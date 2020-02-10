import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PostAd.scss';

class SelectProfile extends Component {
  render() {
    return (
      <div>
        <div className='post-ad-nav-bar'>
          <div>
            <button>Back</button>
          </div>
          <div>
            <ul>
              <li>
                <button type='button' disabled>
                  basic
                </button>
              </li>
              <li>
                <button type='button' disabled>
                  Details
                </button>
              </li>
              <li>
                <button type='button' disabled>
                  Enhance
                </button>
              </li>
              <li>
                <button type='button' disabled>
                  Preview
                </button>
              </li>
            </ul>
          </div>
        </div>
        <form>
          <div className='profile-selection'>
            <h1>profile</h1>
            <div className='lightGrey'>
              <div>
                {' '}
                <p>
                  <b>The ad is for:</b>{' '}
                </p>
              </div>

              <div className='profile-selection-btn'>
                <button className='btn-warning'>One Advertiser</button>
                <button className='btn-secondary'>Multiple Advertise</button>
              </div>
            </div>
            <p>
              Please enter a profile name for the specific advertiser who
              appears in the photos on this ad. This name does not appear
              anywhere on the advertisement. The profile name is simply used to
              group all of this person's photos and documents together in your
              photo library.
            </p>
            <p>
              Each person advertising within your account should only have ONE
              profile. If the same advertiser uses more than one listing name on
              different ads, you can still use one single profile designation
              for all of their photos.
            </p>
            <p>
              If you are the account holder, and also the person who appears on
              the ad, simply select the default profile by selecting "Account
              Holder" from the drop down menu. If the advertiser on the ad is
              not the account holder please select the "New" option from the
              drop down menu to assign that person a profile name. Pre-existing
              profiles will also be available for selection. Legal names are not
              a requirement for profile management.
            </p>
            <div className='adsProfile'>
              <div>
                <p>
                  <b>Please select a profile for this ad:</b>
                </p>
              </div>
              <div>
                <select>
                  <option>Add new</option>
                  <option>Account Holder Person</option>
                </select>
                <Link to='/builder/about'>
                  {' '}
                  <button className='continue'>Continue</button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SelectProfile;
