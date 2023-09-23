import React from 'react'
import TravallerDetails from './TravallerDetails'
import ContactDetails from './ContactDetails'

const UserDetails = ({pageChanges,setPageChanges}) => {

  return (
    <div className='user-details'>
      <TravallerDetails/>
      <div className="line"></div>
      <ContactDetails pageChanges={pageChanges } setPageChanges={setPageChanges}/>
    </div>
  )
}

export default UserDetails
