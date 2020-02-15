import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './PostAd.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebookSquare,
  faTwitter,
  faGooglePlus,
  faSnapchat,
  faVine,
  faTumblr,
  faPeriscope,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { postAdDetails } from '../../actions/user';
import { Alert } from '../common';

class Details extends Component {
    state ={
      form: { },
      errors: {}
    };

    componentWillReceiveProps = (nextProps) => {
      const { errors, message, profileInfo } = nextProps;
      this.setState({ errors, message, profileInfo });
    }

componentDidMount = () => {
  const { profile: { id }, errors } = this.props;
  this.setState({ errors, form: { profileId: id } });
}

    handleChange = (e) => {
      const { form } = this.state;
      this.setState({
        form: { ...form, [e.target.name]: e.target.value },
        error: {}
      });
    };

      handleClick = (e) => {
        e.preventDefault();
        const { form } = this.state;
        const { postAdDetails } = this.props;
        postAdDetails(form);
      }

      handleCheckChange = (e) => {
        const { name, value, checked } = e.target;
        return checked
          ? this.setState((prevState) => ({
            ...prevState,
            form: {
              ...prevState.form,
              [name]: {
                ...prevState.form[name],
                [value]: true
              }
            }
          })) : '';
      };

      render() {
        const { errors, message } = this.state;
        return (
            <div>
                 {(message || errors.error) && (
          <Alert
            alertType={(message && 'success') || (errors.error && 'danger')}
            message={message || errors.error}
          />
                 )}
          />
                 ) : (
                   ''
                 )}
                <div className='details_container'>
                <div className='section_container'>
                 <div className='section'>
                 <div className='section_title'>

                <p>
                YOUR BIO
                </p>

            </div>
            <div className='upload'>

            <p>
            Your ad bio is an important way to give viewers more detailed information about who you are,
            the services you provide, and booking info.
            </p>
            </div>
            <div className='section_title'>
            <p>

                Disclaimer

            </p>
            </div>

            <div className='form_group'>
            <p>Bio Text</p>
                <textarea name='bio' onChange={this.handleChange}>Here we are</textarea>
            </div>
                 </div>
                </div>
                <div className='section_container'>
                    <div className='section'>
                    <div className='section_title'><p>YOUR DETAILS & ADDITIONAL CATEGORIE</p></div>
                    <p>
                    This information will appear on your ad to give viewers a quick summary of your physical attributes.
                 Many qualify your ad for additional categories,
                 giving your ad more visibility.
                    </p>
                    <div>
                    <div>
                        <div className='stats_measurements'>
                             <div className='stats-container'>
                             <div className='stats-header'><p>Your Stats</p></div>
                            <div className='air-color'>
                                <label className='color'><b>Hair Color</b></label>
                                <br />
                                <select name='hairColor' onChange={this.handleChange}>
                                    <option>--hair color--</option>
                                    <option> red </option>
                                    <option> strawberry blonde </option>
                                    <option> blonde </option>
                                    <option> gray </option>
                                    <option> dirty blonde </option>
                                    <option> brunette </option>
                                    <option>  dark brown  </option>
                                    <option>  black  </option>
                                    <option>  brown  </option>
                                    <option>  auburn  </option>
                                    <option>  bald  </option>
                                    <option>  wild  </option>
                                </select>
                                </div>
                                <br />
                            <div className='eye-color'>
                                <label><b>Eye Color</b></label>
                                <div>
                                    <select name='eyeColor' onChange={this.handleChange}>
                                        <option>--eye color--</option>
                                        <option> black </option>
                                        <option> brown </option>
                                        <option> blue </option>
                                        <option> hazel </option>
                                        <option>  green  </option>
                                        <option>  gray  </option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <div className='ethnicity'>
                                <label><b>Ethnicity</b></label>
                                <p>Please select your ethnicity.</p>
                                <div>
                                    <input type='checkbox' value='asia' name='ethnicity' onChange={this.handleCheckChange}/>
                                        <label>Asian</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='black/ebony' name='ethnicity' onChange={this.handleCheckChange}/>
                                        <label>Black/Ebony</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='caucasian' name='ethnicity' onChange={this.handleCheckChange}/>
                                        <label>Caucasian</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='east indian' name='ethnicity' onChange={this.handleCheckChange}/>
                                        <label>East Indian</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='exotic' name='ethnicity' onChange={this.handleCheckChange}/>
                                        <label>Exotic</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='latino/hispanic ' name='ethnicity' onChange={this.handleCheckChange}/>
                                        <label>Latino/Hispanic</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='middle eastern' name='ethnicity' onChange={this.handleCheckChange}/>
                                        <label>Middle Eastern</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='native american' name='ethnicity' onChange={this.handleCheckChange}/>
                                        <label>Native American</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='pacific islander' name='ethnicity' onChange={this.handleCheckChange}/>
                                        <label>Pacific Islander</label>
                                </div>
                            </div>
                            <div className='affiliate'>
                                <p>Affiliation?</p>
                                <button className='independent'>Independent</button>
                                <button className='agency'>Agency</button>
                            </div>
                            <div className='available-to'>
                               <div> <p><b>Available to?</b></p></div>
                                <div>
                                    <input type='checkbox' value='men' name='availableTo' onChange={this.handleCheckChange} />
                                        <label>Men</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='women' name='availableTo' onChange={this.handleCheckChange}/>
                                        <label>Women</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='couples' name='availableTo' onChange={this.handleCheckChange}/>
                                        <label>Couples</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='groups' name='availableTo' onChange={this.handleCheckChange}/>
                                        <label>Groups</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='trans' name='availableTo' onChange={this.handleCheckChange}/>
                                        <label>Trans</label>
                                </div>
                            </div>
                            </div>
                            <div className='stats-container'>
                                <div className='stats-header'><p>Measurements</p></div>
                                <div className='btn-group'>
                                    <label className='btn royal'>Royal</label>
                                    <label className='btn metric'>Metric</label>
                                </div>
                                <div className='measurement-container'>
                                    <div className='measurement-content' >
                                        <div className='measurement'>
                                            <label>Height:</label>
                                            <input type='text' name='measurement' onChange={this.handleChange}/>
                                            <p>ft</p>
                                            <input type='text' name='measurement' onChange={this.handleChange}/>
                                            <p>in</p>
                                        </div>
                                        <div className='measurement'>
                                        <label>Weight:</label>
                                            <input type='text' name='measurement' onChange={this.handleChange}/>
                                            <p>lbs</p>
                                        </div>
                                        <div className='measurement'>
                                        <label>Bust:</label>
                                            <input type='text' />
                                            <p>in</p>
                                        </div>
                                        <div className='measurement'>
                                        <label>Cup:</label>
                                            <select>
                                                <option></option>
                                            </select>
                                        </div>
                                        <p></p>
                                        <div className='measurement'>
                                        <label>Waist:</label>
                                            <input type='text' />
                                            <p>in</p>
                                        </div>
                                        <div className='measurement'>
                                        <label>Hips:</label>
                                            <input type='text' />
                                            <p>in</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className='spec-categories'>
                                <div>
                                <p><b>Specialty Categories</b></p>
                                <p>
                                    Select any specialty categories that apply to you or the service you provide.
                                     Adding specialty categories increases exposure by targeting viewers searching for providers with specific attributes.
                                     </p>
                                </div>
                                     <div>
                                    <input type='checkbox' value='Centerfold' name='specialtyCategories' onChange={this.handleCheckChange}/>
                                        <label>Centerfold - $</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='mature' name='specialtyCategories' onChange={this.handleCheckChange} />
                                        <label>Mature - $</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='alternative' name='specialtyCategories' onChange={this.handleCheckChange}/>
                                        <label>Alternative - $</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='xxx' name='specialtyCategories' onChange={this.handleCheckChange} />
                                        <label>Xxx - $</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='european' name='specialtyCategories' onChange={this.handleCheckChange}/>
                                        <label>European</label>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                    </div>
                </div>
                <div className='section_container'>
                    <div className='section'>
                                <div className='section_title'><p>Location & Mapping</p></div>
                                <p>
                                Where about are you located, and where are you willing to travel?
                                </p>

                                    <div>
                                    <div>
                                    <input type='checkbox' value='inCall' name='location' onChange={this.handleCheckChange}/>
                                        <label>Incall</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='outCall' name='location' onChange={this.handleCheckChange}/>
                                        <label>Outcall</label>
                                </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p><b>Location Categories</b></p>
                                            <p>Please select locations where you are available.</p>
                                        </div>
                                        <div>
                                        <div>
                                    <input type='checkbox' value='lethbridge' name='locationCategories' onChange={this.handleCheckChange}/>
                                        <label>Lethbridge</label>
                                      </div>
                                      <div>
                                    <input type='checkbox' value='lethbridge' name='locationCategories' onChange={this.handleCheckChange}/>
                                        <label>Brooks</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='calgary' name='locationCategories' onChange={this.handleCheckChange}/>
                                        <label>Calgary</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='medicineHat' name='locationCategories' onChange={this.handleCheckChange}/>
                                        <label>Medicine Hat</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='redDeer' name='locationCategories' onChange={this.handleCheckChange}/>
                                        <label>Red Deer</label>
                                </div>
                                <div>
                                    <input type='checkbox' value='airdrie' name='locationCategories' onChange={this.handleCheckChange}/>
                                        <label>Airdrie</label>
                                </div>
                                        </div>
                                    </div>
                            </div>
                            <br />
                    </div>

                            <div className='section_container'>
                              <div className='section'>
                              <div className='section_title'><p>Video & Social</p>
                              </div>
                              <p>Add social media usernames to provide additional ways for viewers to interact with you.</p>
                              <div className='form_group'>
                              <div className='social'>
                                  <div className='youTube row'>
                                  <label><p>YouTube Video URL (3 Minutes Or Less)</p></label>
                                  <div className='input_group'>
                                      <span className='input_group_addon'><FontAwesomeIcon icon={faYoutube}/></span>
                                      <input type='text' name='youtubeLink' onChange={this.handleChange}/>
                                  </div>
                                  </div>
                                  <div className='facebook row'>
                                  <label><p>Facebook Profile</p></label>
                                  <div className='input_group'>
                                      <span><FontAwesomeIcon icon={faFacebookSquare}/>{' '}https://www.facebook.com/</span>
                                      <input type='text' name='facebookLink' onChange={this.handleChange}/>
                                  </div>
                                  </div>
                                  <div className='twitter row'>
                                  <label><p>Twitter Handle @</p></label>
                                  <div className='input_group'>
                                      <span><FontAwesomeIcon icon={faTwitter} />{' '}https://www.twitter.com/</span>
                                      <input type='text' name='twitter' onChange={this.handleChange}/>
                                  </div>
                                  </div>
                                  <div className='GooglePlus row'>
                                  <label><p>Google +</p></label>
                                  <div className='input_group'>
                                      <span><FontAwesomeIcon icon={faGooglePlus} />{' '}https://plus.google.com/</span>
                                      <input type='text' name='googlePlusLink' onChange={this.handleChange}/>
                                  </div>
                                  </div>
                                  <div className='Snapchat row'>
                                  <label><p>Snapchat</p></label>
                                  <div className='input_group'>
                                      <span><FontAwesomeIcon icon={faSnapchat} />{' '}https://www.snapchat.com/add//</span>
                                      <input type='text' name='snapChatLink' onChange={this.handleChange}/>
                                  </div>
                                  </div>
                                  <div className='Vine row'>
                                  <label><p>Vine</p></label>
                                  <div className='input_group'>
                                      <span><FontAwesomeIcon icon={faVine} />{' '}https://vine.co/</span>
                                      <input type='text' name='vineLink' onChange={this.handleChange}/>
                                  </div>
                                  </div>
                                  <div className='Tumblr row'>
                                  <label><p>Tumblr</p></label>
                                  <div className='input_group'>
                                      <span><FontAwesomeIcon icon={faTumblr} />{' '}https://</span>
                                      <input type='text' className='tumblr_input' name='tumblrLink' onChange={this.handleChange}/>
                                      <span className='right'>.tumblr.com/</span>
                                  </div>
                                  </div>
                                  <div className='Periscope row'>
                                  <label><p>Periscope</p></label>
                                  <div className='input_group'>
                                      <span><FontAwesomeIcon icon={faPeriscope} />{' '}https://www.periscope.tv/</span>
                                      <input type='text' name='PeriscopeLink' onChange={this.handleChange}/>
                                  </div>
                                  </div>
                                  <div className='Instagram row'>
                                  <label><p>Instagram</p></label>
                                  <div className='input_group'>
                                      <span><FontAwesomeIcon icon={faInstagram} /> {' '}https://www.instagram.com/</span>
                                      <input type='text' name='instagramLink' onChange={this.handleChange}/>
                                  </div>
                                  </div>
                              </div>
                              </div>
                              </div>
                            </div>
                <div className='saveContinue'>
                  <button className='btnSave' onClick={this.handleClick}>Save</button>
                 <Link to='/builder/enhance' > <button className='btnContinue'>Continue</button></Link>
                </div>
                </div>
            </div>
        );
      }
}

const mapStateToProps = ({ postAd: { details } }) => details;

export default connect(mapStateToProps, { postAdDetails })(Details);
