import React from 'react';
import EventNoteIcon from '@mui/icons-material/EventNote';

const Header = () => {
  return (
    <>
        <div className='hd_div'>
            <h1>
                <span><EventNoteIcon className='hd_icon'/></span>
                Keep Notes
            </h1>
        </div>
        
    </>
  )
}

export default Header;