import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import '../../styles/SideIcons.css'
import Calendar from '../../media/google-calendar.png'
import Keep from '../../media/google-keep.png'
import Tasks from '../../media/Google_Tasks.png'

const index = () => {
    return (
        <div className='sideIcons'>
            <div className="sideIcons_top">
                <img src={Calendar} alt="Google Calendar"/>
                <img src={Keep} alt="Google Keep"/>
                <img src={Tasks} alt="Google Tasks"/>
            </div>

            <hr/>

            <div className="sideIcons_plusIcon">
                <AddIcon />
            </div>
        </div>
    )
}

export default index
