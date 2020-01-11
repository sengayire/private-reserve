import React from 'react';
import './Footer.scss';

const year = new Date().getFullYear();
const Footer = () => (
  <div className="Footer black">
          <div className='footerContact'>
              <ul>
                  <li>
                      <a>Contact</a>
                  </li>
              </ul>
          </div>
          <div>
              <div className="footerMenu">
                  <ul>
                      <li>
                          <a>Privacy</a>
                      </li>
                      <li>
                          <a>Terms & Conditions</a>
                      </li>
                      <li>
                          <a>Advertiser</a>
                      </li>
                      <li>
                          <a>F.A.Q</a>
                      </li>
                      <li>
                          <a>About Eros Ads</a>
                      </li>
                      <li>
                          <a>2257 Exemption</a>
                      </li>
                      <li>
                          <a>DMCA Complaints</a>
                      </li>
                      <li>
                          <a>Trademarks/IP</a>
                      </li>
                      <li>
                          <a>@1992-2020 MPFMedia Service DmbH</a>
                      </li>
                  </ul>
              </div>
          </div>
  </div>
);

export default Footer;
