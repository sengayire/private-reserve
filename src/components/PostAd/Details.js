import React from 'react';
import './PostAd.scss';

const Details = () => {
    return(
        <div>
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
            <textarea>Here we are</textarea>
        </div>
             </div>
            </div>
            <div className='section_container'>
                <div className='section'>
                <div className='section_title'><p><b>YOUR DETAILS & ADDITIONAL CATEGORIE</b></p></div>
                <p>
                This information will appear on your ad to give viewers a quick summary of your physical attributes.
             Many qualify your ad for additional categories,
             giving your ad more visibility.
                </p>
                <div>
                <div>
                    <div className='stats_measurements'>
                        <div className='air-color'>
                        <p><b>Your Stats</b></p>
                            <label><b>Hair Color</b></label>
                            <div>
                            <select>
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
                        <div className='eye-color'>
                            <label><b>Eye Color</b></label>
                            <div>
                                <select>
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
                        <div className='ethnicity'>
                            <label><b>Ethnicity</b></label>
                            <p>Please select your ethnicity.</p>
                            <div>
                                <input type='checkbox' />
                                    <label>Asian</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Black/Ebony</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Caucasian</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>East Indian</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Exotic</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Latino/Hispanic</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Middle Eastern</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Native American</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Pacific Islander</label>
                            </div>
                        </div>
                        <div className='affiliate'>
                            <p>Affiliation?</p>
                            <button>Independent</button>
                            <button>Agency</button>
                        </div>
                        <div className='available-to'>
                           <div> <p><b>Available to?</b></p></div>
                            <div>
                                <input type='checkbox' />
                                    <label>Men</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Women</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Couples</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Groups</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Trans</label>
                            </div>
                        </div>
                        </div>
                        <div>
                            <div ><p>Measurements</p></div>
                            <div>
                                <label>Royal</label>
                                <label>Metric</label>
                            </div>
                            <div className='measurement-container'>
                                <div>
                                    <div>
                                        <label>Height:</label>
                                        <input type='text' />
                                        <p>ft</p>
                                        <input type='text' />
                                        <p>in</p>
                                    </div>
                                    <div>
                                    <label>Weight:</label>
                                        <input type='text' />
                                        <p>lbs</p>
                                    </div>
                                    <div>
                                    <label>Bust:</label>
                                        <input type='text' />
                                        <p>in</p>
                                    </div>
                                    <div>
                                    <label>Cup:</label>
                                        <select>
                                            <option>here</option>
                                        </select>
                                    </div>
                                    <div>
                                    <label>Waist:</label>
                                        <input type='text' />
                                        <p>in</p>
                                    </div>
                                    <div>
                                    <label>Hips:</label>
                                        <input type='text' />
                                        <p>in</p>
                                    </div>

                                    ---
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
                                <input type='checkbox' />
                                    <label>Centerfold - $</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Mature - $</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Alternative - $</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Xxx - $</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>European</label>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='section_container'>
                            <div>
                            <p><b>Location & Mapping</b></p>
                            <p>
                            Where about are you located, and where are you willing to travel?
                            </p>
                            </div>
                                <div>
                                <div>
                                <input type='checkbox' />
                                    <label>Incall</label>
                            </div>
                            <div>
                                <input type='checkbox' />
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
                                <input type='checkbox' />
                                    <label>Lethbridge</label>
                                  </div>
                                  <div>
                                <input type='checkbox' />
                                    <label>Brooks</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Calgary</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Medicine Hat</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Red Deer</label>
                            </div>
                            <div>
                                <input type='checkbox' />
                                    <label>Airdrie</label>
                            </div>
                                    </div>
                                </div>
                        </div>
                        <div className='section_container'>
                          <div><p><b>Video & Social</b></p>
                          <p>Add social media usernames to provide additional ways for viewers to interact with you.</p>
                          </div>
                          <div className='social'>
                              <div className='youTube'>
                              <label><p>YouTube Video URL (3 Minutes Or Less)</p></label>
                              <div>
                                  <span>YouTube</span>
                                  <input type='text'/>
                              </div>
                              </div>
                              <div className='facebook'>
                              <label><p>Facebook Profile</p></label>
                              <div>
                                  <span>https://www.facebook.com/</span>
                                  <input type='text'/>
                              </div>
                              </div>
                              <div className='facebook'>
                              <label><p>Facebook Profile</p></label>
                              <div>
                                  <span>https://www.facebook.com/</span>
                                  <input type='text'/>
                              </div>
                              </div>
                              <div className='facebook'>
                              <label><p>Facebook Profile</p></label>
                              <div>
                                  <span>https://www.facebook.com/</span>
                                  <input type='text'/>
                              </div>
                              </div>
                              <div className='GooglePlus'>
                              <label><p>Google +</p></label>
                              <div>
                                  <span>https://plus.google.com/</span>
                                  <input type='text'/>
                              </div>
                              </div>
                              <div className='Snapchat'>
                              <label><p>Snapchat</p></label>
                              <div>
                                  <span>https://www.snapchat.com/add//</span>
                                  <input type='text'/>
                              </div>
                              </div>
                              <div className='Vine'>
                              <label><p>Vine</p></label>
                              <div>
                                  <span>https://vine.co/</span>
                                  <input type='text'/>
                              </div>
                              </div>
                              <div className='Vine'>
                              <label><p>Vine</p></label>
                              <div>
                                  <span>https://vine.co/</span>
                                  <input type='text'/>
                              </div>
                              </div>
                              <div className='Tumblr'>
                              <label><p>Tumblr</p></label>
                              <div>
                                  <span>https://</span>
                                  <input type='text'/>
                                  <span>.tumblr.com/</span>
                              </div>
                              </div>
                              <div className='Periscope'>
                              <label><p>Periscope</p></label>
                              <div>
                                  <span>https://www.periscope.tv/</span>
                                  <input type='text'/>
                              </div>
                              </div>
                              <div className='Instagram'>
                              <label><p>Instagram</p></label>
                              <div>
                                  <span>https://www.instagram.com/</span>
                                  <input type='text'/>
                              </div>
                              </div>
                          </div>
                        </div>
            <div className='saveContinue'>
              <button>Save</button>
              <button>Continue</button>
            </div>
            </div>
        </div>
    )
}

export default Details;