import React, {Component} from 'react';
import Layout from '../Layout';
import { Button } from '../common';
import './AdminProfile.scss';
export default class AdminProfile extends Component {
    render() {
        return (
            <div>
                <Layout>
<div>
    <div>
        <Button>Build Fast Ad</Button> 
        <Button> Build Regular Ad</Button> 
    </div>
    <div>
        <Button>Available Now ON</Button> 
        <Button> Available Now OFF</Button> 
    </div>
</div>

<div className="profile-form-container"> 
    <form className="profile-form">
        <div className="profile-form-content">
            <div className="form-content">
                <label>Show Me:</label>
                <select>
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
                <button></button>
                <button></button>
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
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>Germany</td>
  </tr>
</table>
</div>
</div>
                </Layout>
            </div>
        ) 
    }
}