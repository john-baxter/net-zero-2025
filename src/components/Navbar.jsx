import { MDBIcon, MDBNavbar, MDBContainer, MDBNavbarBrand, MDBNavbarItem , MDBNavbarLink, MDBNavbarNav} from "mdb-react-ui-kit";
import React from 'react'

const Navbar = () => {
  return (
    <>
    <MDBNavbar light bgColor='secondary'>
        <MDBContainer >
          <MDBNavbarBrand href='#'>
            <img
              src='https://www.bgf.co.uk/wp-content/uploads/2020/02/AND-Digital_LOGO_LONG_RGB_ON_WHITE.png'
              height='30'
              alt=''
              loading='lazy'
            />

          </MDBNavbarBrand>
          <MDBNavbarNav right fullWidth={false} className=''>
            <MDBNavbarItem>
              <MDBNavbarLink href='https://fierce-inlet-05264.herokuapp.com/admin'><MDBIcon icon='user' size='2x' className='text-white'/></MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Navbar
