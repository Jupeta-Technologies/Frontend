import { AppBar, Toolbar, Typography, Tabs, Tab, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DrawerComp from './DrawerComp';

const PAGES = [
  { label: "CATEGORIES", sx: { color: "text.primary" } },
  { label: "sell", sx: { color: "text.primary" } },
  { label: <LocationOnIcon sx={{ color: "text.primary" }} />, sx: {} },
];

const Navbar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#FFFFFF" }}>
        <Toolbar>
          <Typography sx={{ color: 'text.primary' }}>jUPETA</Typography>
         {
            isMatch ? (
              <>
              <DrawerComp/>
              </>
            ) : (
              <>
              <Tabs textColor="#000000" value={value} onChange={(e, value) => setValue(value)} indicatorColor="secondary">
  {PAGES.map((page, index) => (
    <Tab key={index} label={page.label} sx={page.sx} />
  ))}
</Tabs>

              <Tabs sx={{marginLeft: "auto"}} textColor="#000000" >
                <Tab icon={<SearchIcon sx={{ color: 'text.primary' }} />} aria-label="search" />
                <Tab icon={<FavoriteBorderIcon sx={{ color: 'text.primary' }} />} aria-label="favorite" />
                <Tab icon={<AccountCircleIcon sx={{ color: 'text.primary' }} />} aria-label="profile" />
                <Tab icon={<ShoppingCartIcon sx={{ color: 'text.primary' }} />} aria-label="cart" />
              </Tabs>
              </>
            )
         }
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};


export default Navbar;

/*const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="jupeta" className="w-[124px] h-[32px]" />
      <ul className="flex item-center"> 
      {navLinks2.map((nav, index) => (
    <li
      key={nav.id}
      className={`font-poppins 
      font-normal cursor-pointer text-[16px] item-center
      ${index === navLinks2.length - 1 ? 'mr-0' : 'mr-15'}
      text-black`}
    >
      <a href={`#${nav.id}`}>{nav.title}</a>
    </li> 
  ))}
  <ul className="list-none sm:flex hidden justify-end item center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins 
            font-normal cursor-pointer text-[16px]
            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
            text-black`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
</ul>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[23px] h-[28px] object contain"
          onClick={() => {
            console.log('Current toggle value:', toggle); 
            setToggle((prev) => !prev);
          }}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bk-black-gradient absolutetop 20 right-0 mx-4 my-2 min-w-[140px] rounded-x1 sidebar`}
        >
          <ul className="list-none flex flex-col justify-end item center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins 
                font-normal cursor-pointer text-[16px]
                ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
                text-black`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;*/
