import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
const functions = require('../components/function')

export default function Header()
{
    const [ modal, setModal ] = useState(false);
    const [ notification, setNotification ] = useState(false);
    const [ profile, setProfile ] = useState(false);

    return (
        <div>
            <div className="top-bar top-0 left-0 fixed w-full h-16">
                <div className="-intro-y top-bar__content bg-white border-theme-3 dark:bg-dark-2 dark:border-dark-2 border-b w-full h-full flex px-5">
                    {/* <!-- BEGIN: Logo --> */ }
                    <Link className="hidden md:flex items-center h-full mr-auto" to="/">
                        <div className="text-base font-light ml-4"> <span className="font-medium">Messenger </span> </div>
                    </Link>
                    {/* <!-- END: Logo --> */ }
                    <div className="mobile-menu-toggler flex md:hidden items-center h-full mr-auto px-5 -ml-5"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2 w-5 h-5 transform rotate-90"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> </div>
                    <div className="hidden md:flex items-center px-5"> <button className="btn btn-primary" onClick={ () => { setModal(!modal); setNotification(false); setProfile(false) } }>Start Conversation</button> </div>
                    {/* <!-- BEGIN: Notifications --> */ }
                    <div className="notification-dropdown dropdown relative">
                        <div className="cursor-pointer notification-dropdown__toggler text-gray-600 border-theme-7 dark:border-dark-4 dark:text-gray-300 dropdown-toggle h-full flex items-center px-5 relative -mr-3 md:mr-0 md:border-l md:border-r" onClick={ () => { setNotification(!notification); setModal(false); setProfile(false) } }>
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell w-5 h-5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                <div className="w-2 h-2 bg-theme-1 text-white flex items-center justify-center absolute -mt-0.5 top-0 right-0 rounded-full"></div>
                            </div>
                        </div>

                        {/* notification menu */ }
                        { notification && (
                            <div className="notification-dropdown__content dropdown-menu">
                                <div className="dropdown-menu__content box dark:bg-dark-2 px-4 pt-4 pb-5">
                                    <div className="text-base font-medium leading-tight mb-4">Notifications</div>
                                    <div className="cursor-pointer relative flex items-center ">
                                        <div className="w-10 h-10 flex-none image-fit mr-1">
                                            <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-1.jpg" />
                                            <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                                        </div>
                                        <div className="ml-2 overflow-hidden">
                                            <div className="flex items-center">
                                                <p className="font-medium truncate mr-5">Keanu Reeves</p>
                                                <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">05:09 AM</div>
                                            </div>
                                            <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer relative flex items-center mt-6">
                                        <div className="w-10 h-10 flex-none image-fit mr-1">
                                            <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-10.jpg" />
                                            <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                                        </div>
                                        <div className="ml-2 overflow-hidden">
                                            <div className="flex items-center">
                                                <p className="font-medium truncate mr-5">Leonardo DiCaprio</p>
                                                <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">01:10 PM</div>
                                            </div>
                                            <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer relative flex items-center mt-6">
                                        <div className="w-10 h-10 flex-none image-fit mr-1">
                                            <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-14.jpg" />
                                            <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                                        </div>
                                        <div className="ml-2 overflow-hidden">
                                            <div className="flex items-center">
                                                <p className="font-medium truncate mr-5">Christian Bale</p>
                                                <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">05:09 AM</div>
                                            </div>
                                            <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer relative flex items-center mt-6">
                                        <div className="w-10 h-10 flex-none image-fit mr-1">
                                            <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-4.jpg" />
                                            <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                                        </div>
                                        <div className="ml-2 overflow-hidden">
                                            <div className="flex items-center">
                                                <p className="font-medium truncate mr-5">Kevin Spacey</p>
                                                <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">06:05 AM</div>
                                            </div>
                                            <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer relative flex items-center mt-6">
                                        <div className="w-10 h-10 flex-none image-fit mr-1">
                                            <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-13.jpg" />
                                            <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                                        </div>
                                        <div className="ml-2 overflow-hidden">
                                            <div className="flex items-center">
                                                <p className="font-medium truncate mr-5">Tom Hanks</p>
                                                <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">05:09 AM</div>
                                            </div>
                                            <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) }
                    </div>
                    {/* <!-- END: Notifications --> */ }
                    {/* <!-- BEGIN: Account --> */ }
                    <div className="account-dropdown dropdown relative">
                        <div className="cursor-pointer h-full dropdown-toggle flex items-center pl-5" onClick={ () => { setProfile(!profile); setModal(false); setNotification(false) } }>
                            <div className="w-8 h-8 image-fit">
                                <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full shadow-md" src="http://topson.left4code.com/dist/images/profile-9.jpg" />
                            </div>
                            <div className="hidden md:block ml-3">
                                <div className="w-28 truncate font-medium leading-tight">John Travolta</div>
                                <div className="account-dropdown__info text-xs text-gray-600">Frontend Engineer</div>
                            </div>
                        </div>
                        { profile && (
                            <div className="dropdown-content dropdown-menu absolute w-56 top-0 right-0 z-20">
                                <div className="dropdown-menu__content box dark:bg-dark-2">
                                    <div className="p-2">
                                        <button className="flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user w-4 h-4 mr-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Profile </button>
                                        <button className="flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit w-4 h-4 mr-2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> Add Account </button>
                                        <button className="flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock w-4 h-4 mr-2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Reset Password </button>
                                        <button className="flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle w-4 h-4 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> Help </button>
                                    </div>
                                    <div className="border-gray-200 dark:border-dark-4 p-2 border-t">
                                        <button className="flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-toggle-right w-4 h-4 mr-2"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle></svg> Logout </button>
                                    </div>
                                </div>
                            </div>
                        ) }
                    </div>
                    {/* <!-- END: Account --> */ }
                </div>
            </div>

            {/* Modal --> */ }
            { modal && (
                <div className="modal-invite-friends modal" id="invite-friends-modal" tabindex="-1" aria-hidden="true" onClick={ () => { setModal(!modal) } }>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body p-4">
                                <div className="intro-y text-lg font-medium">Start Conversation</div>
                                <div className="modal-content__scrollable overflow-y-auto scrollbar-hidden -mx-4 px-4 mt-4">
                                    <div className="user-list">
                                        <div className="intro-y pb-3">
                                            { functions.contacts.map((contact, index) => (
                                                <div className="intro-y block" key={ index }>
                                                    <Link to={ `/${ contact.username }` }>
                                                        <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
                                                            <div className="w-10 h-10 flex-none image-fit mr-1">
                                                                <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={"http://topson.left4code.com/dist/images/" + contact.image }/>
                                                                <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                                            </div>
                                                            <div className="ml-2 overflow-hidden">
                                                                <p className="font-medium">{ contact.name }</p>
                                                                <div className="flex items-center text-xs">
                                                                    <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 14 seconds ago ago</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) }
        </div>
    )
}
