import { useEffect, useState } from 'react';
import './App.scss';
const functions = require('./function')

function App() {

  const [modal, setModal] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [attachment, setAttachment] = useState(false);
  const [activeContact, setActiveContact] = useState({});
  const [activeChat, setActiveChat] = useState({});
  const [tab, setTab] = useState('chats');
  const [loggedInUser, setLoggedInUser] = useState('chats');

  useEffect(() => {
    setActiveChat(functions.chats[0]);
    setActiveContact(functions.contacts[0]);
    setLoggedInUser(functions.loggedInUser[0]);
  }, [])

  return (
    <div className="App">
     
    {/* <!-- BEGIN: Top Bar --> */}
    <div className="top-bar top-0 left-0 fixed w-full h-16">
        <div className="-intro-y top-bar__content bg-white border-theme-3 dark:bg-dark-2 dark:border-dark-2 border-b w-full h-full flex px-5">
            {/* <!-- BEGIN: Logo --> */}
            <a className="hidden md:flex items-center h-full mr-auto" href="http://localhost/page/dashboard">
                <div className="text-base font-light ml-4"> <span className="font-medium">Messenger </span> </div>
            </a>
            {/* <!-- END: Logo --> */}
            <a className="mobile-menu-toggler flex md:hidden items-center h-full mr-auto px-5 -ml-5" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bar-chart-2 w-5 h-5 transform rotate-90"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> </a>
            <div className="hidden md:flex items-center px-5"> <a href="javascript:;" data-toggle="modal" data-target="#invite-friends-modal" className="btn btn-primary" onClick={() => {setModal(!modal); setNotification(false); setProfile(false)}}>Start Conversation</a> </div>
            {/* <!-- BEGIN: Notifications --> */}
            <div className="notification-dropdown dropdown relative">
                <a href="javascript:;" className="notification-dropdown__toggler text-gray-600 border-theme-7 dark:border-dark-4 dark:text-gray-300 dropdown-toggle h-full flex items-center px-5 relative -mr-3 md:mr-0 md:border-l md:border-r" onClick={() => {setNotification(!notification); setModal(false); setProfile(false)}}>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell w-5 h-5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> 
                        <div className="w-2 h-2 bg-theme-1 text-white flex items-center justify-center absolute -mt-0.5 top-0 right-0 rounded-full"></div>
                    </div>
                </a>

                {/* notification menu */}
                {notification && (
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
                                      <a href="javascript:;" className="font-medium truncate mr-5">Keanu Reeves</a> 
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
                                      <a href="javascript:;" className="font-medium truncate mr-5">Leonardo DiCaprio</a> 
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
                                      <a href="javascript:;" className="font-medium truncate mr-5">Christian Bale</a> 
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
                                      <a href="javascript:;" className="font-medium truncate mr-5">Kevin Spacey</a> 
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
                                      <a href="javascript:;" className="font-medium truncate mr-5">Tom Hanks</a> 
                                      <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">05:09 AM</div>
                                  </div>
                                  <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                              </div>
                          </div>
                      </div>
                  </div>
                )}
            </div>
            {/* <!-- END: Notifications --> */}
            {/* <!-- BEGIN: Account --> */}
            <div className="account-dropdown dropdown relative">
                <a href="javascript:;" className="h-full dropdown-toggle flex items-center pl-5" onClick={() => {setProfile(!profile); setModal(false); setNotification(false)}}>
                    <div className="w-8 h-8 image-fit">
                        <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full shadow-md" src="http://topson.left4code.com/dist/images/profile-9.jpg" />
                    </div>
                    <div className="hidden md:block ml-3">
                        <div className="w-28 truncate font-medium leading-tight">John Travolta</div>
                        <div className="account-dropdown__info text-xs text-gray-600">Frontend Engineer</div>
                    </div>
                </a>
                {profile && (
                  <div className="dropdown-content dropdown-menu absolute w-56 top-0 right-0 z-20">
                      <div className="dropdown-menu__content box dark:bg-dark-2">
                          <div className="p-2">
                              <a href="" className="flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user w-4 h-4 mr-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Profile </a>
                              <a href="" className="flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit w-4 h-4 mr-2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> Add Account </a>
                              <a href="" className="flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-lock w-4 h-4 mr-2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Reset Password </a>
                              <a href="" className="flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-help-circle w-4 h-4 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> Help </a>
                          </div>
                          <div className="border-gray-200 dark:border-dark-4 p-2 border-t">
                              <a href="" className="flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-toggle-right w-4 h-4 mr-2"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle></svg> Logout </a>
                          </div>
                      </div>
                  </div>
                )}
            </div>
            {/* <!-- END: Account --> */}
        </div>
    </div>
    {/* <!-- END: Top Bar --> */}

    {/* Modal --> */}
    {modal && (
      <div className="modal-invite-friends modal" id="invite-friends-modal" tabindex="-1" aria-hidden="true" onClick={() => {setModal(!modal)}}>
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-body p-4">
                      <div className="intro-y text-lg font-medium">Start Conversation</div>
                      <div className="modal-content__scrollable overflow-y-auto scrollbar-hidden -mx-4 px-4 mt-4">
                          <div className="user-list">
                              <div className="intro-y pb-3">
                                  <div className="intro-y text-gray-500 mb-3">A</div>
                                  <div className="intro-y block">
                                      <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
                                          <div className="w-10 h-10 flex-none image-fit mr-1">
                                              <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-1.jpg" />
                                              <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                          </div>
                                          <div className="ml-2 overflow-hidden">
                                              <a href="javascript:;" className="font-medium">Keanu Reeves</a> 
                                              <div className="flex items-center text-xs">
                                                  <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 14 seconds ago ago</div>
                                              </div>
                                          </div>
                                          <input className="form-check-switch ml-auto" type="checkbox" id="friend-list-a-0" />
                                      </div>
                                  </div>
                                  <div className="intro-y block">
                                      <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                          <div className="w-10 h-10 flex-none image-fit mr-1">
                                              <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-10.jpg" />
                                              <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                          </div>
                                          <div className="ml-2 overflow-hidden">
                                              <a href="javascript:;" className="font-medium">Leonardo DiCaprio</a> 
                                              <div className="flex items-center text-xs">
                                                  <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 10 minutes ago ago</div>
                                              </div>
                                          </div>
                                          <input className="form-check-switch ml-auto" type="checkbox" id="friend-list-a-1" />
                                      </div>
                                  </div>
                                  <div className="intro-y block">
                                      <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                          <div className="w-10 h-10 flex-none image-fit mr-1">
                                              <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-14.jpg" />
                                              <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                          </div>
                                          <div className="ml-2 overflow-hidden">
                                              <a href="javascript:;" className="font-medium">Christian Bale</a> 
                                              <div className="flex items-center text-xs">
                                                  <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 15 seconds ago ago</div>
                                              </div>
                                          </div>
                                          <input className="form-check-switch ml-auto" type="checkbox" id="friend-list-a-2" />
                                      </div>
                                  </div>
                                  <div className="intro-y text-gray-500 mt-6 mb-3">B</div>
                                  <div className="intro-y block">
                                      <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
                                          <div className="w-10 h-10 flex-none image-fit mr-1">
                                              <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-1.jpg" />
                                              <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                          </div>
                                          <div className="ml-2 overflow-hidden">
                                              <a href="javascript:;" className="font-medium">Keanu Reeves</a> 
                                              <div className="flex items-center text-xs">
                                                  <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 14 seconds ago ago</div>
                                              </div>
                                          </div>
                                          <input className="form-check-switch ml-auto" type="checkbox" id="friend-list-b-0" />
                                      </div>
                                  </div>
                                  <div className="intro-y block">
                                      <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                          <div className="w-10 h-10 flex-none image-fit mr-1">
                                              <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-10.jpg" />
                                              <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                          </div>
                                          <div className="ml-2 overflow-hidden">
                                              <a href="javascript:;" className="font-medium">Leonardo DiCaprio</a> 
                                              <div className="flex items-center text-xs">
                                                  <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 10 minutes ago ago</div>
                                              </div>
                                          </div>
                                          <input className="form-check-switch ml-auto" type="checkbox" id="friend-list-b-1" />
                                      </div>
                                  </div>
                                  <div className="intro-y block">
                                      <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                          <div className="w-10 h-10 flex-none image-fit mr-1">
                                              <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-14.jpg" />
                                              <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                          </div>
                                          <div className="ml-2 overflow-hidden">
                                              <a href="javascript:;" className="font-medium">Christian Bale</a> 
                                              <div className="flex items-center text-xs">
                                                  <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 15 seconds ago ago</div>
                                              </div>
                                          </div>
                                          <input className="form-check-switch ml-auto" type="checkbox" id="friend-list-b-2" />
                                      </div>
                                  </div>
                                  <div className="intro-y block">
                                      <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                          <div className="w-10 h-10 flex-none image-fit mr-1">
                                              <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-4.jpg" />
                                              <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                          </div>
                                          <div className="ml-2 overflow-hidden">
                                              <a href="javascript:;" className="font-medium">Kevin Spacey</a> 
                                              <div className="flex items-center text-xs">
                                                  <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 52 seconds ago ago</div>
                                              </div>
                                          </div>
                                          <input className="form-check-switch ml-auto" type="checkbox" id="friend-list-b-3" />
                                      </div>
                                  </div>
                                  <div className="intro-y text-gray-500 mt-6 mb-3">C</div>
                                  <div className="intro-y block">
                                      <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
                                          <div className="w-10 h-10 flex-none image-fit mr-1">
                                              <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-1.jpg" />
                                              <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                          </div>
                                          <div className="ml-2 overflow-hidden">
                                              <a href="javascript:;" className="font-medium">Keanu Reeves</a> 
                                              <div className="flex items-center text-xs">
                                                  <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 14 seconds ago ago</div>
                                              </div>
                                          </div>
                                          <input className="form-check-switch ml-auto" type="checkbox" id="friend-list-ac-0" />
                                      </div>
                                  </div>
                                  <div className="intro-y block">
                                      <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                          <div className="w-10 h-10 flex-none image-fit mr-1">
                                              <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-10.jpg" />
                                              <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                          </div>
                                          <div className="ml-2 overflow-hidden">
                                              <a href="javascript:;" className="font-medium">Leonardo DiCaprio</a> 
                                              <div className="flex items-center text-xs">
                                                  <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 10 minutes ago ago</div>
                                              </div>
                                          </div>
                                          <input className="form-check-switch ml-auto" type="checkbox" id="friend-list-ac-1" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )}

    {/* <!-- BEGIN: Side Menu --> */}
    <div className="side-menu hidden md:block top-0 left-0 fixed w-16 h-screen">
        <div className="side-menu__content box border-theme-3 dark:bg-dark-2 dark:border-dark-2 -intro-x border-r w-full h-full pt-16 flex flex-col justify-center overflow-hidden">
            <a className={tab === 'chats' ? '-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative side-menu__content__link--active tooltip py-5' : '-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative py-5'} href="javascript:;.html" data-placement="right" data-content="chats" onClick={() => {setTab('chats')}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail w-5 h-5 mx-auto"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a className={tab === 'contacts' ? '-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative side-menu__content__link--active tooltip py-5' : '-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative py-5'} href="javascript:;.html" data-placement="right" data-content="contacts"  onClick={() => {setTab('contacts')}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users w-5 h-5 mx-auto"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </a>
            <a className={tab === 'profile' ? '-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative side-menu__content__link--active tooltip py-5' : '-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative py-5'} href="javascript:;.html" data-placement="right" data-content="profile"   onClick={() => {setTab('profile')}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user w-5 h-5 mx-auto"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </a>
        </div>
    </div>
    {/* <!-- END: Side Menu --> */}

    <div className="md:pl-16 pt-16">
        <div className="-mt-16 ml-auto xl:-ml-16 mr-auto xl:pl-16 pt-16 xl:h-screen w-auto sm:w-3/5 xl:w-auto grid grid-cols-12 gap-6">
            
            {/* <!-- BEGIN: Side Content Profile --> */}
            {tab === 'profile' && (
              <div className="side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 flex-col overflow-hidden" data-content="profile">
                  <div className="intro-y text-xl font-medium">Profile</div>
                  <div className="intro-y box relative px-4 py-6 mt-5">
                      <a href="javascript:;" className="text-gray-600 tooltip w-8 h-8 flex items-center justify-center absolute top-0 right-0 mr-1 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit-2 w-4 h-4"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                      </a>
                      <div className="w-20 h-20 mx-auto image-fit">
                          <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={"http://topson.left4code.com/dist/images/" + loggedInUser.image } />
                          <div className="bg-green-500 border-white w-3 h-3 absolute right-0 top-0 mt-1 mr-1 rounded-full border-2"></div>
                      </div>
                      <div className="text-base font-medium text-center mt-3">{loggedInUser.name}</div>
                      <div className="text-gray-600 text-center text-xs uppercase mt-0.5">{loggedInUser.designation}</div>
                  </div>
                  <div className="intro-y box p-4 mt-3">
                      <div className="border-gray-200 dark:border-dark-5 flex items-center border-b pb-3">
                          <div className="">
                              <div className="text-gray-600">Country</div>
                              <div className="capitalize mt-0.5">{loggedInUser.country}</div>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe w-4 h-4 text-gray-600 ml-auto"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> 
                      </div>
                      <div className="border-gray-200 dark:border-dark-5 flex items-center border-b py-3">
                          <div className="">
                              <div className="text-gray-600">Phone</div>
                              <div className="mt-0.5">{loggedInUser.phone}</div>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mic w-4 h-4 text-gray-600 ml-auto"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg> 
                      </div>
                      <div className="border-gray-200 dark:border-dark-5 flex items-center border-b py-3">
                          <div className="">
                              <div className="text-gray-600">Gender</div>
                              <div className="capitalize mt-0.5">{loggedInUser.gender}</div>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail w-4 h-4 text-gray-600 ml-auto"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> 
                      </div>
                      <div className="border-gray-200 dark:border-dark-5 flex items-center py-3">
                          <div className="">
                              <div className="text-gray-600">Email</div>
                              <div className="mt-0.5">{loggedInUser.email}</div>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail w-4 h-4 text-gray-600 ml-auto"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> 
                      </div>
                  </div>
              </div>
            )}
            {/* <!-- END: Side Content Profile --> */}

            {/* <!-- BEGIN: Side Content Contacts --> */}
            {tab === 'contacts' && (
              <div className="side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 flex-col overflow-hidden" data-content="contacts">
                  <div className="intro-y text-xl font-medium">Contacts</div>
                  <div className="intro-y relative mt-5 mb-6">
                      <input type="text" className="form-control box py-3 px-4 border-transparent pr-8" placeholder="Search for contacts..." />
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search text-gray-600 w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> 
                  </div>
                  <div className="intro-y overflow-y-auto scrollbar-hidden -mx-5 px-5">
                      <div className="user-list">
                          <div className="intro-x">
                          {functions.contacts.map((contact,index) => (
                            <div key={index} onClick={() => {setActiveContact(contact)}}>
                               <div className={activeContact === contact ? ' zoom-in chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 bg-theme-1 dark:bg-theme-1' : 'chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4  zoom-in'}>
                                      <div className="w-10 h-10 flex-none image-fit mr-1">
                                          <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={"http://topson.left4code.com/dist/images/" + contact.image} />
                                          <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                      </div>
                                      <div className="ml-2 overflow-hidden">
                                          <a href="javascript:;" className={activeContact === contact ? 'text-white font-medium' : 'font-medium text-gray-800'}>{contact.name}</a> 
                                          <div className="flex items-center text-xs mt-0.5">
                                              <div className={activeContact === contact ? 'text-opacity-80 w-4/5 truncate mt-0.5 text-white' : 'text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800'}>Last seen 26 seconds ago ago</div>
                                          </div>
                                      </div>
                                  </div>
                            </div>
                          ))}
                          </div>
                      </div>
                  </div>
              </div>
            )}
            {/* <!-- END: Side Content Contacts --> */}

            {/* <!-- BEGIN: Side Content Chats --> */}
            {tab == 'chats' && (
              <div className="side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 side-content--active flex-col overflow-hidden" data-content="chats">
                  <div className="intro-y text-xl font-medium">Chats</div>
                  <div className="intro-y relative mt-5">
                      <input type="text" className="form-control box py-3 px-4 border-transparent pr-8" placeholder="Search for messages or users..." />
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search text-gray-600 w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> 
                  </div>
                  <div className="intro-y text-base font-medium leading-tight mt-3">Recent Chats</div>
                  <div className="intro-y overflow-y-auto scrollbar-hidden pt-2 mt-3 -mx-5 px-5">
                    {functions.chats.map((chat,index) => (
                      <div className="intro-x my-3" key={index} onClick={() => {setActiveChat(chat)}}>
                          <div className="zoom-in">
                              <div className={activeChat === chat ? 'chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 bg-theme-1 dark:bg-theme-1' : 'chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4'}>
                                  <div className="w-12 h-12 flex-none image-fit mr-1">
                                      <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={"http://topson.left4code.com/dist/images/" + chat.image} />
                                      <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                  </div>
                                  <div className="ml-2 overflow-hidden">
                                      <a href="javascript:;" className={activeChat === chat ? 'text-white font-medium' : 'font-medium text-gray-800'}>{chat.name}</a> 
                                      <div className={activeChat === chat ? 'text-opacity-80 w-4/5 truncate mt-0.5 text-white' : 'text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800'}>{chat.message}</div>
                                  </div>
                                  <div className="flex flex-col">
                                      <div className="whitespace-nowrap text-opacity-80 text-xs text-white">03:20 PM</div>
                                  </div>
                                  <div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
                              </div>
                          </div>
                      </div>
                    ))}
                    
                  </div>
              </div>
            )}
            {/* <!-- END: Side Content Chats --> */}

            {/* <!-- BEGIN: Chat Box --> */}
            <div className="chat-box border-theme-5 col-span-12 xl:col-span-6 flex flex-col overflow-hidden xl:border-l xl:border-r p-6">
                
                {/* <!-- BEGIN: Chat Box Top Bar --> */}
                <div className="intro-y box border border-theme-3 dark:bg-dark-2 dark:border-dark-2 flex items-center px-5 py-4">
                    <div className="flex items-center mr-auto">
                        <div className="w-12 h-12 flex-none image-fit mr-1">
                            <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-9.jpg" />
                            <div className="bg-green-500 w-3 h-3 absolute right-0 top-0 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-2 overflow-hidden">
                            <a href="javascript:;" className="text-base font-medium">John Travolta</a> 
                            <div className="text-gray-600">Online</div>
                        </div>
                    </div>
                    <a className="text-gray-600 hover:text-theme-1" href=""> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-camera w-4 h-4 sm:w-6 sm:h-6"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg> </a>
                    <a className="text-gray-600 hover:text-theme-1 ml-2 sm:ml-5" href=""> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mic w-4 h-4 sm:w-6 sm:h-6"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg> </a>
                </div>
                {/* <!-- END: Chat Box Top Bar --> */}

                {/* <!-- BEGIN: Chat Box Content --> */}
                <div className="overflow-y-scroll scrollbar-hidden pt-5 flex-1">
                    {/* <!-- BEGIN: Chat Text --> */}
                    <div className="-intro-x chat-text-box flex items-end float-left mb-4">
                        <div className="chat-text-box__photo w-10 h-10 hidden sm:block flex-none image-fit relative mr-4">
                            <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-9.jpg" />
                        </div>
                        <div className="w-full">
                            <div>
                                <div className="chat-text-box__content flex items-center float-left">
                                    <div className="box leading-relaxed dark:text-gray-300 text-gray-700 px-4 py-3 mt-3"> Lorem ipsum sit <a className="text-theme-1" href="">@edwardnorton</a> amen dolor, lorem ipsum sit amen dolor </div>
                                   
                                </div>
                                <div className="clear-both"></div>
                            </div>
                            <div className="clear-both mb-2"></div>
                            <div className="text-gray-600 text-xs">2 mins ago</div>
                        </div>
                    </div>
                    {/* <!-- END: Chat Text --> */}
                    <div className="clear-both"></div>
                    {/* <!-- BEGIN: Chat Text --> */}
                    <div className="intro-x chat-text-box flex items-end float-right mb-4">
                        <div className="w-full">
                            <div>
                                <div className="chat-text-box__content flex items-center float-right">
                                    <div className="box leading-relaxed bg-theme-1 text-opacity-80 text-white px-4 py-3 mt-3"> Lorem ipsum sit <a className="text-white" href="">@morganfreeman</a> amen dolor, lorem ipsum sit amen dolor </div>
                                </div>
                                <div className="clear-both"></div>
                            </div>
                            <div className="clear-both mb-2"></div>
                            <div className="text-gray-600 text-xs text-right">1 mins ago</div>
                        </div>
                        <div className="chat-text-box__photo w-10 h-10 hidden sm:block flex-none image-fit relative ml-4">
                            <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-1.jpg" />
                        </div>
                    </div>
                    {/* <!-- END: Chat Text --> */}
                    <div className="clear-both"></div>
                    <div className="intro-y text-gray-500 text-xs text-center mb-6 mt-5">12 June 2020</div>
                    {/* <!-- BEGIN: Chat Text --> */}
                    <div className="-intro-x chat-text-box flex items-end float-left mb-4">
                        <div className="chat-text-box__photo w-10 h-10 hidden sm:block flex-none image-fit relative mr-4">
                            <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-9.jpg" />
                        </div>
                        <div className="w-full">
                            <div>
                                <div className="chat-text-box__content flex items-center float-left">
                                    <div className="box leading-relaxed dark:text-gray-300 text-gray-700 px-4 py-3 mt-3"> Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor </div>
                                </div>
                                <div className="clear-both"></div>
                                <div className="clear-both"></div>
                                <div className="chat-text-box__content flex items-center float-left">
                                    <div className="box leading-relaxed dark:text-gray-300 text-gray-700 px-4 py-3 mt-3"> Contrary to popular belief </div>
                                </div>
                            </div>
                            <div className="clear-both mb-2"></div>
                            <div className="text-gray-600 text-xs">10 secs ago</div>
                        </div>
                    </div>
                    {/* <!-- END: Chat Text --> */}
                    <div className="clear-both"></div>
                    {/* <!-- BEGIN: Chat Text --> */}
                    <div className="intro-x chat-text-box flex items-end float-right mb-4">
                        <div className="w-full">
                            <div>
                                <div className="chat-text-box__content flex items-center float-right">
                                    <div className="box leading-relaxed bg-theme-1 text-opacity-80 text-white px-4 py-3 mt-3"> Lorem ipsum </div>
                                </div>
                                <div className="clear-both"></div>
                            </div>
                            <div className="clear-both mb-2"></div>
                            <div className="text-gray-600 text-xs text-right">1 secs ago</div>
                        </div>
                        <div className="chat-text-box__photo w-10 h-10 hidden sm:block flex-none image-fit relative ml-4">
                            <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-1.jpg" />
                        </div>
                    </div>
                    {/* <!-- END: Chat Text --> */}
                    <div className="clear-both"></div>
                    {/* <!-- BEGIN: Chat Text --> */}
                    <div className="-intro-x chat-text-box flex items-end float-left mb-4">
                        <div className="w-10 h-10 hidden sm:block flex-none image-fit relative mr-5">
                            <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src="http://topson.left4code.com/dist/images/profile-9.jpg" />
                        </div>
                        <div className="w-full">
                            <div>
                                <div className="chat-text-box__content flex items-center float-left">
                                    <div className="box leading-relaxed dark:text-gray-300 text-gray-700 px-4 py-3 mt-3">
                                        John Travolta is typing...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END: Chat Text --> */}
                </div>
                {/* <!-- END: Chat Box Content --> */}
                {/* <!-- BEGIN: Chat Box Input --> */}
                <div className="intro-y chat-input box border-theme-3 dark:bg-dark-2 dark:border-dark-2 border flex items-center px-5 py-4">
                    {/* <!-- BEGIN: Chat Input Dropdown --> */}
                    <div className="dropdown relative" data-placement="top">
                        <a href="javascript:;" className="text-gray-600 hover:text-theme-1 dropdown-toggle" onClick={() => {setAttachment(!attachment)}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus w-5 h-5 sm:w-6 sm:h-6"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </a>
                        {attachment && (
                          <div className="chat-input__dropdown dropdown-menu">
                              <div className="dropdown-menu__content p-2">
                                  <a href="" className="shadow-md text-gray-600 bg-white  dark:text-gray-300 dark:bg-dark-3 hover:bg-theme-1 hover:text-white dark:hover:bg-theme-1 flex items-center p-3 transition duration-300 rounded-md mb-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-camera w-5 h-5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg> </a>
                                  <a href="" className="shadow-md text-gray-600 bg-white  dark:text-gray-300 dark:bg-dark-3 hover:bg-theme-1 hover:text-white dark:hover:bg-theme-1 flex items-center p-3 transition duration-300 rounded-md mb-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mic w-5 h-5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg> </a>
                                  <a href="" className="shadow-md text-gray-600 bg-white  dark:text-gray-300 dark:bg-dark-3 hover:bg-theme-1 hover:text-white dark:hover:bg-theme-1 flex items-center p-3 transition duration-300 rounded-md mb-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> </a>
                              </div>
                          </div>
                        )}
                    </div>
                    {/* <!-- END: Chat Input Dropdown --> */}
                    <textarea className="form-control h-12 shadow-none resize-none border-transparent px-5 py-3 focus:shadow-none truncate mr-3 sm:mr-0" rows="1" placeholder="Type your message..."></textarea>
                    {/* <!-- BEGIN: Chat Smiley Dropdown --> */}
                    <div className="dropdown relative mr-3 sm:mr-5" data-placement="top-end">
                        <a href="javascript:;" className="text-gray-600 hover:text-theme-1 dropdown-toggle w-4 h-4 sm:w-5 sm:h-5 block"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-smile w-full h-full"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg> </a>
                    </div>
                    {/* <!-- END: Chat Smiley Dropdown --> */}
                    <a href="javascript:;" className="bg-theme-1 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-none flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-send w-4 h-4 sm:w-5 sm:h-5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> </a>
                </div>
                {/* <!-- END: Chat Box Input --> */}
            </div>
            {/* <!-- END: Chat Box --> */}
            {/* <!-- BEGIN: Right Content Info --> */}
            <div className="info-content col-span-12 xl:col-span-3 flex flex-col overflow-hidden pl-6 xl:pl-0 pr-6">
                <div className="overflow-y-auto scrollbar-hidden py-6">
                    {/* <!-- BEGIN: Profile --> */}
                    <div className="intro-y box relative px-4 py-6">
                        <a href="javascript:;" className="text-gray-600 tooltip w-8 h-8 flex items-center justify-center absolute top-0 right-0 mr-1 mt-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit-2 w-4 h-4"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> </a>
                        <div className="w-20 h-20 mx-auto image-fit">
                            <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={"http://topson.left4code.com/dist/images/" + activeContact.image } />
                            <div className="bg-green-500 border-white w-3 h-3 absolute right-0 top-0 mt-1 mr-1 rounded-full border-2"></div>
                        </div>
                        <div className="text-base font-medium text-center mt-3">{activeContact.name}</div>
                        <div className="text-gray-600 text-center text-xs uppercase mt-0.5">{activeContact.designation}</div>
                    </div>
                    {/* <!-- END: Profile --> */}
                    {/* <!-- BEGIN: Detail Profile --> */}
                    <div className="intro-y box p-4 mt-3">
                        <div className="text-base font-medium">Personal Information</div>
                        <div className="mt-4">
                            <div className="border-gray-200 dark:border-dark-5 flex items-center border-b pb-3">
                                <div className="">
                                    <div className="text-gray-600">Country</div>
                                    <div className="mt-0.5">{activeContact.country}</div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe w-4 h-4 text-gray-600 ml-auto"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> 
                            </div>
                            <div className="border-gray-200 dark:border-dark-5 flex items-center border-b py-3">
                                <div className="">
                                    <div className="text-gray-600">Phone</div>
                                    <div className="mt-0.5">{activeContact.phone}</div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mic w-4 h-4 text-gray-600 ml-auto"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg> 
                            </div>
                            <div className="border-gray-200 dark:border-dark-5 flex items-center py-3">
                                <div className="">
                                    <div className="text-gray-600">Email</div>
                                    <div className="mt-0.5">{activeContact.email}</div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail w-4 h-4 text-gray-600 ml-auto"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> 
                            </div>
                        </div>
                    </div>
                    {/* <!-- END: Detail Profile --> */}
                </div>
            </div>
            {/* <!-- END: Right Content Info --> */}
        </div>
    </div>

    </div>
  );
}

export default App;
