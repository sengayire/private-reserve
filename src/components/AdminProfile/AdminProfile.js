import React, { Component } from 'react';
import Layout from '../Layout';
import { Button } from '../common';
import './AdminProfile.scss';

export default class AdminProfile extends Component {
  render() {
    return (
            <div>
                <Layout>
<div className="profile-top-button">
    <div>
        <Button>Build Fast Ad</Button>
        <Button> Build Regular Ad</Button>
    </div>
    <div className="profile-top-btn-left">
        <Button>Available Now ON</Button>
        <Button> Available Now OFF</Button>
    </div>
</div>

<div className="profile-form-container">
    <form className="profile-form">
        <div className="profile-form-content">
            <div className="profile-select-show">
            <div className="form-content">
                <label>Show Me:</label>
                <select className="show-me-select-opt">
                    <option>
                        Online Services
                    </option>
                    <option>
                        Offline Services
                    </option>
                    <option>
                        Paid, In Review
                    </option>
                    <option>
                        Paid, Not Assigned
                    </option>
                    <option>
                       Future
                    </option>
                    <option>
                        All Services
                    </option>
                </select>
            </div>
            <div>
                <label>Sort By:</label>
                <select>
                    <option>
                        Status
                    </option>
                    <option>
                       Name
                    </option>
                    <option>
                       Market
                    </option>
                    <option>
                        List Price
                    </option>
                    <option>
                      Start Date
                    </option>
                    <option>
                        End Date
                    </option>
                    <option>
                        Status
                    </option>
                </select>
            </div>
            </div>

            <div>
                <label>Show per page:</label>
                <select>
                    <option>
                        25
                    </option>
                    <option>
                       50
                    </option>
                    <option>
                       100
                    </option>
                </select>
            </div>
            <div>
                <button>Az</button>
                <button>Za</button>
            </div>
            <div>
                <div>
                    <input type="text" placeholder="Search..."></input>
                </div>
            </div>
        </div>
    </form>

    <div>
<table id="customers">
  <tr>
    <th>Action</th>
    <th>Services</th>
    <th>Details</th>
    <th>Duration</th>
    <th>List Price</th>
    <th>Status</th>
    <th>Renew</th>
  </tr>
  <tr>
    <td>
        <p>Delete</p>
        <p>Post Visit / Copy Ad</p>
    </td>
    <td>Maria Anders</td>
    <td>
        <p><b>Toronto, ON, Canada</b></p>
        <p>Visiting Ad</p>
        <p><b>Person:</b> Account Holder</p>
        <p>Person</p>
    </td>
    <td>
        <p>Start: 08/14/2019 5:01 pm</p>
        <p>End: 08/29/2019 5:01 pm</p>
    </td>
    <td>
        <p><b>CA$100.50</b></p>
        <p>Bump<b>CA$9.39</b></p>
    </td>
    <td>
        <p><b>Offline</b></p>
        <p>Order Saved</p>
    </td>
    <td>
        <b>In the Bag</b>
    </td>
  </tr>
</table>
</div>
</div>
                </Layout>
            </div>
    );
  }
}
