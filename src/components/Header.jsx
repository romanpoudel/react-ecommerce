import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginButton from './LoginButton';
import LogoutButton from './LogotButton';
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const itemNumber = useSelector((state) => state.cart.itemsNumber)
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className='bg-gray-900 h-16 sticky top-0 drop-shadow-2xl px-24 pt-2'>
      <div className='flex items-center justify-between'>
        <div className='text-center font-bold text-3xl text-gray-100'><NavLink to="/">Music World</NavLink></div>
        <div>{isAuthenticated ? <div className='flex items-center'>
          <img src={user.picture} alt={user.name} className="object-contain h-12 w-8" />
          <h2 className='text-white ml-4'>{user.name}</h2>
        </div> : ""}</div>
        <div>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>
        {isAuthenticated ? <div className='pl-14 relative'>
          <div className='pt-2'>
            <NavLink to="/cart">
              <ShoppingCartOutlinedIcon style={{ color: 'white' }} fontSize='large' />
            </NavLink>
          </div>
          <p className='text-white bg-red-500 rounded-full text-center text-xs h-6 w-6 flex items-center justify-center font-mono absolute top-0 left-20'>{itemNumber}</p>
        </div> : ''}

      </div>
    </div>
  )
}

export default Header
