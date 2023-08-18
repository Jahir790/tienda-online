import { NavLink } from 'react-router-dom'
 
const Navbar = () => {
    
    const activeStyle = 'underline'

   return ( //Etiqueta padre (<Nav>) <ul> item lado izquierdo. Shopi 1er Elemento. apartir del correo son los item del lado derecho.
       <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sn font-light'>  
           <ul className='flex items-center gap-3'>
              <li className='font-semibold text-lg'>

               <NavLink to='/'>
                   Shopi
               </NavLink>
               </li> 
               <li>
               <NavLink to='/'
               className={({ isActive }) =>
               isActive ? activeStyle : undefined
               }>
                   All
               </NavLink>
               </li> 
               <li>
               <NavLink to='/clothes'
               className={({ isActive }) =>
               isActive ? activeStyle : undefined
               }>
                   Clothes
               </NavLink>
               </li> 
               <li>
               <NavLink to='/electronics' 
               className={({ isActive }) =>
               isActive ? activeStyle : undefined
               }>
                   Electronics
               </NavLink>
               </li> 
               <li>
               <NavLink to='/furnitures'
               className={({ isActive }) =>
               isActive ? activeStyle : undefined
               }>
                   Furnitures
               </NavLink>
               </li> 
               <li>
               <NavLink to='/toys' 
               className={({ isActive }) =>
               isActive ? activeStyle : undefined
               }>
                   Toys
               </NavLink>
               </li> 
               <li>
               <NavLink to='/others' 
               className={({ isActive }) =>
               isActive ? activeStyle : undefined
               }>
                   Others
               </NavLink>
               </li> 
               </ul>

                <ul className='flex items-center gap-3'>
                <li>
               albertojahir@gmail.com
               </li> 
               <li>
               <NavLink to= '/myorders'
               className={({ isActive }) =>
               isActive ? activeStyle : undefined
               }>
                   My Orders
               </NavLink>
               </li> 
               <li>
               <NavLink to= '/myaccount'
               className={({ isActive }) =>
               isActive ? activeStyle : undefined
               }>
                   My Account
               </NavLink>
               </li> 
               <li>
               <NavLink to= '/signin' 
               className={({ isActive }) =>
                isActive ? activeStyle : undefined
                }>
                   Sign In
               </NavLink>
               </li>  
               <li>
                   🛒 0
               </li>
                </ul>
               
           
       </nav>
   )
}

export default Navbar