import React from 'react';
import './PostAd.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const AboutYou = () => {
    return(
        <div>
            <div className='about-you-container'>
            <div className='ad-profile section'>
               <div className='section-container'>
               <div className='ad-prof-header header'> <p> 
                    Profile
                </p></div>
                <div className='ad-owner-name'>
                    <b>Ad Profile:</b>
                    <p> Account Holder Person</p>
                </div>
               </div>
            </div>
            <div className='about-you section'>
               <div className='section-container'>
               <div className='about-you-header header'><p>About You</p></div>
               <div className='advertising-name'>
                <div>
                    <label><b>Advertising Name</b></label>
                </div>
                <div>
                    <input type='text' />
                </div>
                <p><small>35 characters remaining</small></p>
               </div>
               <hr />
                <div className='tagline'>
                    <label><b>Tagline</b></label>
                    <div>
                        <textarea type='text' rows='2'></textarea>
                    </div>
                    <p><small>100 characters remaining</small></p>
                </div>
                <hr />
                <div>
                    <label>
                      <b>Age</b>
                    </label>
                    <div>
                        <input type='text' />
                    </div>
                </div>
                <hr />
                <div className='gender'>
                    <label>
                        <b>Gender</b>
                    </label>
                    <div>
                        <select>
                            <option>--Gender--</option>
                            <option>female</option>
                            <option>transsexual</option>
                            <option> hermaphrodite </option>
                            <option> male </option>
                            <option>  transvestite  </option>
                            <option>   female to male transsexual   </option>
                        </select>
                    </div>
                </div>
                <hr />
                <div className='contact'>
                    <h4>Contact Info (phone, email)
                    </h4>
                        <span>
                        Add at least one phone number or email contact on the ad.
                        </span>
                    <div className='contact-info'>
                        <div>
                            <span className='input-addon icon'>
                            <FontAwesomeIcon icon={faPhone} color='#3386d2'/>
                            </span>
                            <input type='text'  placeholder='Phone Number'/>
                            <span className='input-addon plus'><FontAwesomeIcon icon={faPlus}/> </span>
                            <div className='social-media-ckeckbox'>
                                <div className='viber-checkbox'>
                                    <label>Viber</label>
                                    <input type='checkbox' />
                                </div>
                                <div className='whatsapp-checkbox'>
                                    <label>Whatsapp</label>
                                    <input type='checkbox' />
                                </div>
                            </div>
                        </div>

                        <div>
                            <span className='input-addon icon' >
                            <FontAwesomeIcon icon={faEnvelope} color='#3386d2'/>                                
                            </span>
                            <input type='text'  placeholder='Email'/>
                            <span className='input-addon plus'><FontAwesomeIcon icon={faPlus}/></span>
                        </div>
                    </div>
                </div>
               </div>
            </div>
            <div className='about-your-ad section'>
                <div className='section-container'>
                <div className='about-your-ad-header header'>
                    <p>
                    ABOUT YOUR AD
                    </p>
                </div>
                <div className="location">
                 <label>
                 Where should your ad appear?
                 </label>
                 <div>
                     <select>
                         <option>--country--</option>
                         <option> Canada </option>
                         <option> England </option>
                         <option> Italy </option>
                         <option> Northern Ireland </option>
                         <option> Scotland </option>
                         <option> United States </option>
                         <option> Wales </option>
                     </select>
                     <p></p>
                     <select>
                         <option>--City/State--</option>
                         
                     </select>
                 </div>
                 <div>
                     <p>
                     Please select location for this options 
                     </p>
                     <p>
                         <b>
                         What services do you provide?
                         </b>
                     </p>
                     <p>
                         <h3 className='text-danger' >
                         You will have to choose at least one main category
                         </h3>
                     </p>
                     <p>You can appear in additional main categories for a small extra cost.</p>
                 </div>
                </div>
                </div>
            </div>
            <div className="your-photo section">
              <div className='section-container'>
              <div className='your-photo-header header'><p>YOUR PHOTOS</p></div>
                <p> Upload new photos.</p>
                <p className='text-danger' > Please, be aware that the resolution of a photo needs to be larger than 300 x 300.</p>
                <div className='file-upload'>
                 <form class="box" method="post" action="" enctype="multipart/form-data">
                    <div class="box__input">
                        <input class="box__file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                        {/* <label for="file"><strong>Choose a file</strong><span class="box__dragndrop"> or drag it here</span>.</label>
                        <button class="box__button" type="submit">Upload</button> */}
                        <p className='dropInfo'> Drag & Drop your photos here 
                        <span>Upload up to 8 at once from your device</span>
                        </p>
                       
                        <div>
                            <p>Or</p>
                            <p className='dropInfo'> Click to Upload Photos from your Computer/Device </p>
                        </div>
                    </div>
                    <div class="box__uploading">Uploading&hellip;</div>
                    <div class="box__success">Done!</div>
                    <div class="box__error">Error! <span></span>.</div>
                 </form>
                </div>
                <p>
                Thumbnail will automatically be created from your 1st ad photo. 
                You can rearrange the photo order by grabbing each photo and dragging to the desired order.
                 Press play button to check out how your thumbnail would look on our live site
                </p>
                <div className='alert-info'>
                    <p>
                    An "<i>animated thumbnail</i>" is a rotation of your ad images. 
                     thumbnails are included with VIP ads, and are available at a small cost for standard ads.
                    This features' price will be included in upcoming ad renewal price.
                    </p>
                </div>
                <div className='animated'>
                    <span><input type='checkbox' /></span>
                   <span><p>Upgrade to animated</p></span> 
                </div>
                <div className='thumbnail'>
                    <p>Thumbnail</p>
                    <p>Ad Photos</p>
                </div>
              </div>
            </div>
            <div className='saveContinue'>
              <button className='btn-secondary'>Save</button>
              <button className='btn-continue'>Continue</button>
            </div>
            </div>
        </div>
    )
}

export default AboutYou;