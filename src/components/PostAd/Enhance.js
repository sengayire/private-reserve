import React from 'react';
import './PostAd.scss';
import diamond from '../../assets/images/diamond.svg';
import platin from '../../assets/images/platin.svg';
import feature from '../../assets/images/feature.svg';

const Enhance = () => (
        <div>
            <div className='container'>
                <div className='accordion'>
                   <div className='card'>
                       <div className='header'>
                           <h2>
                               <button> Market Landing Page - Click for details & configuration </button>
                           </h2>
                       </div>
                       <div className='collapse'>
                           <div className='body landing-page'>
                               <div className='one-col-lg'>
                                   <div className='circle white'>
                                       <p>W</p>
                                   </div>
                                   <div>
                                       <h3> worldwide featured entertainer </h3>
                                       <p> This service is targeted to an International audience and is all about maximum exposure for any ad live on the Eros Guide network.
                                            This service is displayed on our main landing page (www.eros.com),
                                           and is currently limited to 12 positions displayed as thumbnails or animated thumbnails.
                                       </p>
                                   </div>
                                   <div>
                                       <button className='btn-yellow'> See details </button>
                                   </div>
                               </div>

                               <div className='two-columns'>
                                   <div className='first-col'>
                                       <div className='circle'>
                                           <img alt src={diamond} />
                                       </div>
                                   </div>
                                   <div className='second-col'>
                                       <h3> diamond placement
                                           <br />
                                           <span className='bold'>Starting at CA$67.00</span>
                                       </h3>

                                       <p> Diamonds are a girl's best friends.
                                           Want EXCLUSIVE placement on the site? Top of the Market  - Only 2 spots  - Shows tagline - 7-day run,
                                            Tuesday to Tuesday
                                            </p>
                                            <button className='btn-yellow'> See Details </button>
                                   </div>
                               </div>

                               <div className='two-columns'>
                                   <div className='first-col'>
                                       <div className='circle'>
                                           <img alt src={platin} />
                                       </div>
                                   </div>
                                   <div className='second-col'>
                                       <h3> platinum placement <br />
                                       <span className='bold'>Starting at CA$26.80</span>
                                       </h3>
                                       <p> Platinum, the best fit for a queen.
                                           Want to be among the FIRST in your location? Market page - Only 16 spots  - 7-day run,
                                           Tuesday to Tuesday
                                            </p>
                                            <button className='btn-yellow'> See Details </button>
                                   </div>
                               </div>

                               <div className='one-col'>
                                   <h3>girl of the day</h3>
                                   <p> Starting at CA$13.40, for your area </p>
                                   <button className='btn-white'> Details > </button>
                               </div>

                               <div className='one-col'>
                                   <h3>MARQUEE BANNER</h3>
                                   <p>  Starting at CA$53.60, for your area  </p>
                                   <button className='btn-white'> Details > </button>
                               </div>

                               <div className='one-col'>
                                   <h3>tile banner</h3>
                                   <p>  Starting at CA$53.60, for your area  </p>
                                   <button className='btn-white'> Details > </button>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className='card'>
                       <div className='header'>
                           <h2>
                               <button>
                               Category Listing Page
                               </button>
                           </h2>
                       </div>
                       <div className='collapse'>
                         <div className='body landing-page'>
                             <div className='one-col-lg'>
                                 <div className='circle white'>
                                    <p>G</p>
                                 </div>
                                 <div>
                                     <h3>gold placement</h3>
                                     <p> Gold, the color of royalty. Want the BEST placement in one of our categories? Top of a Category
                                         - Only 1 spot - 7-day run, Tuesday to Tuesday - Shows tagline
                                     </p>
                                 </div>
                                     <div>
                                         <button className='btn-yellow'>see details</button>
                                     </div>
                             </div>
                             <div className='one-col'>
                                 <h3>gold placement available now</h3>
                                 <p> Starting at CA$13.40, for your area </p>
                                 <button className='btn-white'> Details > </button>
                             </div>
                             <div className='one-col'>
                                 <h3>silver placement</h3>
                                 <p> Starting at CA$13.40, for your area </p>
                                 <button className='btn-white'> Details > </button>
                             </div>
                             <div className='one-col'>
                                 <h3>category banner</h3>
                                 <p> Starting at CA$13.40, for your area </p>
                                 <button className='btn-white'> Details > </button>
                             </div>
                         </div>
                       </div>
                   </div>
                   <div className='card'>
                       <div className='header'>
                           <h2>
                               <button> What's New Page </button>
                           </h2>
                       </div>
                       <div className='collapse'>
                           <div className='body landing-page'>
                               <div className='one-col-lg'>
                                   <div className='circle white'>
                                       <img slt src={feature} />
                                   </div>
                                   <div>
                                       <h3> what's new featured entertainer </h3>
                                       <p> Shoot for the stars. Want everyone to know about the NEW STAR in town? What's New page -
                                           Only 2 spots, can be combined - 7-day run, Tuesday to Tuesday - Shows tagline - Top of your market’s What's New page
                                      </p>
                                   </div>
                                   <div><button className='btn-yellow'> See details </button></div>
                               </div>
                               <div className='two-columns'>
                                       <div className='first-col'>
                                          <div className='white'>
                                               <p className='title-letter'>T</p>
                                               </div>
                                       </div>
                                       <div className='second-col'>
                                           <h3>what's new top banner</h3>
                                           <span className='bold'> STARTING AT CA$2.68 </span>
                                           <button className='btn-yellow'> See Details </button>
                                       </div>
                                   </div>
                                   <div className='two-columns'>
                                       <div className='first-col'>
                                          <div className='white'> <p className='title-letter'>B</p></div>
                                       </div>
                                       <div className='second-col'>
                                           <h3>what's new bottom banner</h3>
                                           <span className='bold'> STARTING AT CA$2.68 </span>
                                           <button className='btn-yellow'> See Details </button>
                                       </div>
                                   </div>
                           </div>
                       </div>
                   </div>
                <div className='btnGrp'>
                    <button className='btn-white'>Continue</button>
                </div>
                </div>
            </div>
        </div>
);

export default Enhance;
