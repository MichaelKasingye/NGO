import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

function DrawerMenu() {
    return (
        <div className="drawer_section">
          <div className="drawer_content">
                    <div className="drawer_icon"><HomeIcon /></div>
                    <div className="drawer_text">Home</div>
                </div>
                <div className="drawer_content">
                    <div className="drawer_icon"><QuestionAnswerIcon /></div>
                    <div className="drawer_text">My Questions</div>
                </div>
          </div>
    )
}

export default DrawerMenu
