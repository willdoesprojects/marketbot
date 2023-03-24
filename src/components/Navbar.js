import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
{ name: 'Marketbot', href: './', current: false },
  { name: 'Find a Store', href: '#', current: false },
  { name: 'Cart', href: '#', current: false },
  { name: 'About Us', href: './AboutUs', current: false },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(prop1, prop2) {
  const signin = [
    {name: 'Sign In', href: './SignIn', current: prop1 = true},
    {name: 'Hello', href: '#', current: prop2 = false}
  ]
  return (
    <Disclosure as="nav" className="bg-[#004e36]">
      {({ open }) => (
        <>
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
                  <input type = "text" className = "rounded-full py-1 px-1 text-black dark:text-black-dark border-white" placeholder = "Zipcode" maxLength={5}></input>
                </div>
                  <div className = "signin ">
                
                      {signin.map((item) => {
                        console.log(item.name + " " + item.current);
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
