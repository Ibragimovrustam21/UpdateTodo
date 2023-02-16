import React from 'react'
import { Link } from 'react-router-dom'
import './sideBar.scss'

export const SideBar = () => {
  return (
    <div className='sidebar'>
      <ul className='sidebar__menu'>
        <li className='sidebar__menu--link'>
          <Link to='/add-member'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.77778 10.2222V18C5.77778 19.1046 6.67321 20 7.77778 20H12M5.77778 10.2222L11.2929 4.70711C11.6834 4.31658 12.3166 4.31658 12.7071 4.70711L17.5 9.5M5.77778 10.2222L4 12M18.2222 10.2222V18C18.2222 19.1046 17.3268 20 16.2222 20H12M18.2222 10.2222L20 12M18.2222 10.2222L17.5 9.5M17.5 9.5V6M12 20V15" stroke="rgb(207, 206, 206)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </li>
        <li className='sidebar__menu--link'>
          <Link to='/add-member'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 21.0001H6.5C5.11929 21.0001 4 19.8808 4 18.5001C4 14.4194 10 14.5001 12 14.5001C14 14.5001 20 14.4194 20 18.5001C20 19.8808 18.8807 21.0001 17.5 21.0001Z" stroke="#ffffffd2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#ffffffd2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </li>
        <li className='sidebar__menu--link'>
          <Link to='/add-member'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 14C21.2091 14 23 16 23 17.5C23 18.3284 22.3284 19 21.5 19H21M17 11C18.6569 11 20 9.65685 20 8C20 6.34315 18.6569 5 17 5M5 14C2.79086 14 1 16 1 17.5C1 18.3284 1.67157 19 2.5 19H3M7 11C5.34315 11 4 9.65685 4 8C4 6.34315 5.34315 5 7 5M16.5 19H7.5C6.67157 19 6 18.3284 6 17.5C6 15 9 14 12 14C15 14 18 15 18 17.5C18 18.3284 17.3284 19 16.5 19ZM15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z" stroke="rgb(207, 206, 206)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </li>
        <li className='sidebar__menu--link'>
          <Link to='/add-member'>
            <svg fill="rgb(207, 206, 206)" width="24" height="24" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
              <path d="m692.08 851.622 343.003 343.002c53.309 53.308 82.673 124.235 82.673 199.567 0 75.445-29.364 146.372-82.673 199.68l-16.49 16.49-742.361-742.25 16.489-16.49c106.73-106.842 292.743-106.842 399.36 0Zm340.18-387.389 390.437 390.438-286.193 286.193c-7.34-8.584-13.44-18.07-21.571-26.09L771.93 771.773c-4.752-4.819-10.019-8.805-15.309-12.757l-1.983-1.482c-2.974-2.225-5.936-4.471-8.797-6.88l286.419-286.42Zm102.776-304.489 592.15 592.038-83.914 83.915c-22.024 22.023-57.826 22.023-79.85 0l-20.442-20.442c-.226-.226-.226-.452-.452-.678-.226-.113-.452-.113-.565-.339L1072.806 345.08c-.226-.225-.34-.564-.565-.79-.226-.226-.565-.339-.79-.452l-20.33-20.33c-22.024-22.023-22.024-57.938 0-79.962l83.915-83.802Zm0-159.699L971.272 163.697c-59.295 59.294-62.344 150.776-15.022 216.847L658.876 677.918c-4.066 3.953-6.437 8.81-9.035 13.553-144.565-60.085-322.899-33.656-436.97 80.301l-96.338 96.34 411.106 411.105-511.06 511.059c-22.136 22.023-22.136 57.826 0 79.85 10.956 11.067 25.413 16.602 39.869 16.602s28.913-5.535 39.981-16.603l511.059-511.059 411.106 410.993 96.339-96.339c74.654-74.54 115.764-173.816 115.764-279.529 0-55.115-11.745-108.31-33.091-157.327 2.597-1.92 5.647-3.05 8.018-5.421l300.763-300.763c29.365 20.895 62.456 34.448 96.903 34.448 43.37 0 86.852-16.603 119.83-49.582l163.766-163.764L1135.036.045Z" fillRule="evenodd" />
            </svg>
          </Link>
        </li>
        <li className='sidebar__menu--link'>
          <Link to='/add-member'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7H21" stroke="rgb(207, 206, 206)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M3 12H21" stroke="rgb(207, 206, 206)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M3 17H21" stroke="rgb(207, 206, 206)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  )
}
