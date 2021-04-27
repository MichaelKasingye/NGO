import React from 'react'
import Avatar from '@material-ui/core/Avatar';

function DrawerMenuUser() {
    return (
        <div className="drawer_section">
          <div className="drawer_content">
                    <div className="drawer_avatar"><Avatar /></div>
                    <div className="drawer_user"> <strong>User</strong></div>
                </div>
                <div className="drawer_content">
                    <div className="drawer_login">Login/logout</div>
                </div>
          </div>
    )
}

export default DrawerMenuUser
