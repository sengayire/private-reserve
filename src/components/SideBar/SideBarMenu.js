import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import {
  SettingsRounded,
  FilterVintageSharp,
  AddBoxRounded,
  StarRounded,
  EmailRounded,
  MonetizationOnRounded,
  SubscriptionsRounded,
  InsertLinkSharp,
  PaymentSharp,
  BackupSharp,
  HeadsetMicSharp,
  ExitToAppSharp
} from '@material-ui/icons';

class SideBarMenu extends Component {
  ordersItemMenu= [
    { name: 'my services', icon: <FilterVintageSharp fontSize='small' /> },
    { name: 'create ads', icon: <AddBoxRounded fontSize='small' /> },
    { name: 'premier services', icon: <StarRounded fontSize='small' /> },
    { name: 'Pricing', icon: <EmailRounded fontSize='small' /> },
    { name: 'Watchlist', icon: <MonetizationOnRounded fontSize='small' /> },
    { name: 'Create via Bitcoins', icon: <SubscriptionsRounded fontSize='small' /> },
    { name: 'link exchange', icon: <InsertLinkSharp fontSize='small' /> },
    { name: 'Manage my cards', icon: <PaymentSharp fontSize='small' /> },
    { name: 'upload documents', icon: <BackupSharp fontSize='small' /> },
    { name: 'Account & settings', icon: <SettingsRounded fontSize='small' /> },
    { name: 'Contact & support', icon: <HeadsetMicSharp fontSize='small' /> },
    { name: 'Logout', icon: <ExitToAppSharp fontSize='small' /> },

  ]

  render() {
    const { activeItem, onClick } = this.props;
    return (
      <div className='side-bar-menu'>
        <Menu pointing vertical>
          {
            this.ordersItemMenu.map(({ name, icon }) => (<Menu.Item
                name={name}
                active={activeItem === name}
                onClick={onClick}
                icon={icon}
              />))
          }
      </Menu>
      </div>
    );
  }
}

export default SideBarMenu;
