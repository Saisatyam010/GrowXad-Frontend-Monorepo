import { useEffect, useState } from 'react';
import './DashboardHeader.css';
import { Col, Container, Row } from "react-bootstrap";
import { MdCircleNotifications } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DashboardHeader = () => {
    const [user, setUser] = useState('');
    console.log(user)

    useEffect(() => {
        // Retrieve user information from localStorage
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    return (
        <>





            <Container fluid className='bg-black '>
                <Row >
                    <Col md={4} >
                        <div className='text-white d-flex align-items-center  h-100'>
                            <div>
                                <Link to='/advertiserdashboard'>
                                <div className='ps-10'><img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/098f5405-d18d-443f-ed8b-83acd1ee8200/public" height={100} width={140}></img></div>
                                </Link>

                            </div>

                        </div>
                    </Col>
                    <Col md={3}>
                    </Col>
                    <Col md={5}>
                        <div className="d-flex justify-content-center align-items-center p-3">
                            <div className="me-3">
                                <button type='submit' formAction='' className='ab-btndh'>CREATE CAMPAIGN </button>
                            </div>
                            <div className="me-3"><p className='text-white'>Balance: $0.00</p></div>
                            <div className="ab-iconsizedh ms-3 me-3"><p className='text-white'><MdCircleNotifications /></p></div>
                            <div className="ms-3"><p className='text-white'>User:{user != "" ? user?.data?.fullName : 'guest'}</p>
                            
                            <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
                            
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

        </>




    )
}

export default DashboardHeader