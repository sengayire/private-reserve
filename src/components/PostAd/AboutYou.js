import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './PostAd.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { userProfile, upload } from '../../actions/user';
import { Alert } from '../common';

class AboutYou extends Component {
  state = {
    form: {
      adProfile: 'prince',
      advertName: '',
      tagline: '',
      age: '',
      gender: '',
      phoneNumber: '',
      email: '',
      country: '',
      city: '',
      images: [],
    },
    errors: {},
    message: '',
  };

  componentWillReceiveProps = nextProps => {
    const {
      details: { message, errors },
    } = nextProps;
    this.setState({ errors, message });
  };

  handleChange = e => {
    const { form } = this.state;

    this.setState({
      form: { ...form, [e.target.name]: e.target.value },
      errors: {},
    });
  };

  handleUpload = e => {
    const { files } = e.target;
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        images: files[0],
      },
    });
  };

  handleClick = e => {
    e.preventDefault();
    const { form } = this.state;
    const { upload } = this.props;
    const { userProfile } = this.props;
    upload(form.images);
    userProfile(form);
  };

  render() {
    const {
      errors,
      form: { images },
      message,
    } = this.state;
    return (
      <div>
        {(message || errors.error) && (
          <Alert
            alertType={(message && 'success') || (errors.error && 'danger')}
            message={message || errors.error}
          />
        )}
        <div className='about-you-container'>
          <div className='ad-profile section'>
            <div className='section-container'>
              <div className='ad-prof-header header'>
                {' '}
                <p>Profile</p>
              </div>
              <div className='ad-owner-name'>
                <b>Ad Profile:</b>
                <p> Account Holder Person</p>
              </div>
            </div>
          </div>
          <div className='about-you section'>
            <div className='section-container'>
              <div className='about-you-header header'>
                <p>About You</p>
              </div>
              <div className='advertising-name'>
                <div>
                  <label>
                    <b>Advertising Name</b>
                  </label>
                </div>
                <div>
                  <input
                    name='advertName'
                    type='text'
                    onChange={this.handleChange}
                  />
                </div>
                <p>
                  <small>35 characters remaining</small>
                </p>
              </div>
              <hr />
              <div className='tagline'>
                <label>
                  <b>Tagline</b>
                </label>
                <div>
                  <textarea
                    name='tagline'
                    type='text'
                    rows='2'
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <p>
                  <small>100 characters remaining</small>
                </p>
              </div>
              <hr />
              <div>
                <label>
                  <b>Age</b>
                </label>
                <div>
                  <input name='age' type='text' onChange={this.handleChange} />
                </div>
              </div>
              <hr />
              <div className='gender'>
                <label>
                  <b>Gender</b>
                </label>
                <div>
                  <select name='gender' onChange={this.handleChange}>
                    <option>--Gender--</option>
                    <option value='female'>female</option>
                    <option value='transsexual'>transsexual</option>
                    <option value='hermaphrodite'> hermaphrodite </option>
                    <option value='male'> male </option>
                    <option value='transvestite'> transvestite </option>
                    <option value='femaleToMaleTranssexual'>
                      {' '}
                      female to male transsexual{' '}
                    </option>
                  </select>
                </div>
              </div>
              <hr />
              <div className='contact'>
                <h4>Contact Info (phone, email)</h4>
                <span>
                  Add at least one phone number or email contact osn the ad.
                </span>
                <div className='contact-info'>
                  <div>
                    <span className='input-addon icon'>
                      <FontAwesomeIcon icon={faPhone} color='#3386d2' />
                    </span>
                    <input
                      type='text'
                      name='phoneNumber'
                      placeholder='Phone Number'
                      onChange={this.handleChange}
                    />
                    <span className='input-addon plus'>
                      <FontAwesomeIcon icon={faPlus} />{' '}
                    </span>
                    <div className='social-media-ckeckbox'>
                      <div className='viber-checkbox'>
                        <label>Viber</label>
                        <input
                          name='viberContact'
                          type='checkbox'
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className='whatsapp-checkbox'>
                        <label>Whatsapp</label>
                        <input
                          name='whatsappContact'
                          type='checkbox'
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className='input-addon icon'>
                      <FontAwesomeIcon icon={faEnvelope} color='#3386d2' />
                    </span>
                    <input
                      type='text'
                      name='email'
                      placeholder='Email'
                      onChange={this.handleChange}
                    />
                    <span className='input-addon plus'>
                      <FontAwesomeIcon icon={faPlus} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='about-your-ad section'>
            <div className='section-container'>
              <div className='about-your-ad-header header'>
                <p>ABOUT YOUR AD</p>
              </div>
              <div className='location'>
                <label>Where should your ad appear?</label>
                <div>
                  <select name='country' onChange={this.handleChange}>
                    <option value='select'>--country--</option>
                    <option value='Canada'> Canada </option>
                    <option value='England'> England </option>
                    <option value='Italy'> Italy </option>
                    <option value='Northern Ireland'> Northern Ireland </option>
                    <option value='Scotland'> Scotland </option>
                    <option value='United States '> United States </option>
                    <option value='Wales'> Wales </option>
                  </select>
                  <p></p>
                  <select name='city' onChange={this.handleChange}>
                    <option>--City/State--</option>
                    <option>--kigali--</option>
                  </select>
                </div>
                <div>
                  <p>Please select location for this options</p>
                  <p>
                    <b>What services do you provide?</b>
                  </p>
                  <h3 className='text-danger'>
                    <p>You will have to choose at least one main category</p>
                  </h3>
                  <p>
                    You can appear in additional main categories for a small
                    extra cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='your-photo section'>
            <div className='section-container'>
              <div className='your-photo-header header'>
                <p>YOUR PHOTOS</p>
              </div>
              <p> Upload new photos.</p>
              <p className='text-danger'>
                {' '}
                Please, be aware that the resolution of a photo needs to be
                larger than 300 x 300.
              </p>
              <div className='file-upload'>
                <form className='box' encType='multipart/form-data'>
                  <div className='box__input'>
                    <input
                      className='box__file'
                      ref='file'
                      type='file'
                      name='files'
                      id='file'
                      multiple
                      onChange={this.handleUpload}
                    />
                    <p className='dropInfo'>
                      {' '}
                      Drag & Drop your photos here
                      <span>Upload up to 8 at once from your device</span>
                    </p>

                    <div>
                      <p>Or</p>
                      <p className='dropInfo'>
                        {' '}
                        Click to Upload Photos from your Computer/Device{' '}
                      </p>
                    </div>
                  </div>
                  <div className='box__uploading'>Uploading&hellip;</div>
                  <div className='box__success'>Done!</div>
                  <div className='box__error'>
                    Error! <span></span>.
                  </div>
                </form>
                <div>
                  <img src={images} />
                </div>
              </div>
              <p>
                Thumbnail will automatically be created from your 1st ad photo.
                You can rearrange the photo order by grabbing each photo and
                dragging to the desired order. Press play button to check out
                how your thumbnail would look on our live site
              </p>
              <div className='alert-info'>
                <p>
                  An "<i>animated thumbnail</i>" is a rotation of your ad
                  images. thumbnails are included with VIP ads, and are
                  available at a small cost for standard ads. This features'
                  price will be included in upcoming ad renewal price.
                </p>
              </div>
              <div className='animated'>
                <span>
                  <input type='checkbox' />
                </span>
                <span>
                  <p>Upgrade to animated</p>
                </span>
              </div>
              <div className='thumbnail'>
                <p>Thumbnail</p>
                <p>Ad Photos</p>
              </div>
            </div>
          </div>
          <div className='saveContinue'>
            <button className='btn-secondary' onClick={this.handleClick}>
              Save
            </button>
            <Link to='/builder/details'>
              <button className='btn-continue'>Continue</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({
  postAd: { details },
  user: { adProfile },
  upload: { upload },
}) => ({
  details,
  adProfile,
  upload,
});

export default connect(mapStateToProps, { userProfile, upload })(AboutYou);
