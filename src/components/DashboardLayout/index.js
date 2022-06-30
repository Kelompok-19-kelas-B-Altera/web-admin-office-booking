import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Header from '../Header';
import { useState } from 'react';

const DashboardLayout = () => {
  const [active , setActive] = useState(false);
  
  return(
    <>
      <Header active={active} setActive={setActive}/>
      <div className='flex'>
        <Sidebar active={active}/>
        <Outlet />
      </div>
    </>
  )
}

export default DashboardLayout