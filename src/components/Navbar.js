import { Fragment } from 'react'
import {useState} from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from './logo.PNG';
import { Block } from '@mui/icons-material';
import { SignIn } from './SignIn.js';
import userEvent from '@testing-library/user-event';
import loginData from '../LoginData.json';


const navigation = [
  { name: 'Find a Store', href: './findstore', current: false },
  { name: 'Cart', href: './cart', current: false },
  { name: 'About Us', href: './AboutUs', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

//prop3 = 0
export default function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;

  let userId = props.userId;

  const userName = localStorage.getItem('userName');

  if (isLoggedIn) {
    localStorage.setItem('userName', loginData[userId].name);
    
  }

  console.log(userId);


  const signin = [
    {name: 'Sign In', href: './SignIn', current: props = !isLoggedIn},
    {name: 'Hello ' + userName , href: './profile', current: props = isLoggedIn}
  ]

  // if (prop3.isLoggedIn != null) {
  //   const isLoggedIn = prop3.isLoggedIn;
  // }
  

  
  return (
    <Disclosure as="nav" className="bg-[#004fff] flex">
      {({ open }) => (
        <>
          <div class="logo">
            <a href="./">
            <img 
                src={logo} alt="logo.png" 
                style={{
                  height: `${45}px`,
                  width: `${45}px`,
                  padding: `${1}px`,
                  top: `${5}px`,
                  left: `${4}px`,
                  position: "absolute"
                }}
            />
            </a>
          </div>

          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-white font-verdana no-underline hover:underline',
                          'rounded-md px-3 py-2 text-xl '
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div>
                  <form>
                    <input 
                          type = "text" 
                          className = "rounded-full py-1 px-1 text-black dark:text-black-dark border-white" 
                          placeholder = "Zipcode" 
                          maxLength={5}>
                          
                    </input>
                  </form>
                </div>
                  <div className = "signin ">
                
                      {signin.map((item) => {
                        if (item.current == true) {

                          return (
                            <a className = "text-white font-verdana no-underline hover:underline rounded-md px-3 py-2 text-xl" href={item.href}>{item.name}</a>
                          );
                        }
                        

                        })}


                  </div>
               
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-3 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          
        </>
      )}
    </Disclosure>
  )
}
