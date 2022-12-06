import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
const functions = require('../components/function')

function Home(){
    const [ activeContact, setActiveContact ] = useState({});
    const [ activeChat, setActiveChat ] = useState({});
    const [ tab, setTab ] = useState('chats');
    const [ loggedInUser, setLoggedInUser ] = useState({});
    const [ chats, setchats ] = useState([]);
    const [ contacts, setcontacts ] = useState([]);

    useEffect(() =>
    {
        setActiveChat(functions.chats[ 0 ]);
        setActiveContact(functions.contacts[ 0 ]);
        setLoggedInUser(functions.loggedInUser[ 0 ]);
        setchats(functions.chats);
        setcontacts(functions.contacts);
    }, [])

    const [ attachment, setAttachment ] = useState(false);
    const [ activeUserChat, setActiveUserChat ] = useState([]);

    const { username } = useParams();

    const getUser = () =>
    {
        const tempContacts = []
        const contacts = functions.contacts
        contacts.forEach(contact =>
        {
            if (username)
            {
                if (contact.username === username)
                {
                    tempContacts.push(contact)
                }
            }
        })
        
        setActiveUserChat(tempContacts[ 0 ])
    }

    // search contacts by name
    const searchContact = (e) => {
        e.preventDefault();

        const tempContacts = [];
        const contacts = functions.contacts

        for (let i = 0; i < contacts.length; i++) {
            if (
                contacts[i].name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            ) {
                tempContacts.push(contacts[i]);
            }
        }

        setcontacts(tempContacts);
    }

    // search contacts by name
    const searchChat = (e) => {
        e.preventDefault();

        const tempchats = [];

        for (let i = 0; i < chats.length; i++) {
            if (
                chats[i].name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            ) {
                tempchats.push(chats[i]);
            }
        }

        setchats(tempchats);
    }

    useEffect(() =>
    {
        getUser();
    }, [])

    return (
        <>
            {/* header */}
            <Header />

            {/* <!-- BEGIN: Side Menu --> */ }
            <div className="side-menu hidden md:block top-0 left-0 fixed w-16 h-screen">
                <div className="side-menu__content box border-theme-3 dark:bg-dark-2 dark:border-dark-2 -intro-x border-r w-full h-full pt-16 flex flex-col justify-center overflow-hidden">
                    <div className={ tab === 'chats' ? 'cursor-pointer -intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative side-menu__content__link--active tooltip py-5' : 'cursor-pointer  -intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative py-5' } data-placement="right" data-content="chats" onClick={ () => { setTab('chats') } }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail w-5 h-5 mx-auto"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <div className={ tab === 'contacts' ? 'cursor-pointer -intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative side-menu__content__link--active tooltip py-5' : 'cursor-pointer -intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative py-5' } data-placement="right" data-content="contacts" onClick={ () => { setTab('contacts') } }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users w-5 h-5 mx-auto"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <div className={ tab === 'profile' ? 'cursor-pointer -intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative side-menu__content__link--active tooltip py-5' : 'cursor-pointer -intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative py-5' } data-placement="right" data-content="profile" onClick={ () => { setTab('profile') } }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user w-5 h-5 mx-auto"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                </div>
            </div>
            {/* <!-- END: Side Menu --> */ }

            <div className="md:pl-16 pt-16">
                <div className="-mt-16 ml-auto xl:-ml-16 mr-auto xl:pl-16 pt-16 xl:h-screen w-auto sm:w-3/5 xl:w-auto grid grid-cols-12 gap-6">

                    {/* <!-- BEGIN: Side Content Profile --> */ }
                    { tab === 'profile' && (
                        <div className="side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 flex-col overflow-hidden" data-content="profile">
                            <div className="intro-y text-xl font-medium">Profile</div>
                            <div className="intro-y box relative px-4 py-6 mt-5">
                                <a href="#" className="text-gray-600 tooltip w-8 h-8 flex items-center justify-center absolute top-0 right-0 mr-1 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2 w-4 h-4"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                </a>
                                <div className="w-20 h-20 mx-auto image-fit">
                                    <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={ "http://topson.left4code.com/dist/images/" + loggedInUser.image } />
                                    <div className="bg-green-500 border-white w-3 h-3 absolute right-0 top-0 mt-1 mr-1 rounded-full border-2"></div>
                                </div>
                                <div className="text-base font-medium text-center mt-3">{ loggedInUser.name }</div>
                                <div className="text-gray-600 text-center text-xs uppercase mt-0.5">{ loggedInUser.designation }</div>
                            </div>
                            <div className="intro-y box p-4 mt-3">
                                <div className="border-gray-200 dark:border-dark-5 flex items-center border-b pb-3">
                                    <div className="">
                                        <div className="text-gray-600">Country</div>
                                        <div className="capitalize mt-0.5">{ loggedInUser.country }</div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe w-4 h-4 text-gray-600 ml-auto"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                </div>
                                <div className="border-gray-200 dark:border-dark-5 flex items-center border-b py-3">
                                    <div className="">
                                        <div className="text-gray-600">Phone</div>
                                        <div className="mt-0.5">{ loggedInUser.phone }</div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mic w-4 h-4 text-gray-600 ml-auto"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                                </div>
                                <div className="border-gray-200 dark:border-dark-5 flex items-center border-b py-3">
                                    <div className="">
                                        <div className="text-gray-600">Gender</div>
                                        <div className="capitalize mt-0.5">{ loggedInUser.gender }</div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail w-4 h-4 text-gray-600 ml-auto"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div className="border-gray-200 dark:border-dark-5 flex items-center py-3">
                                    <div className="">
                                        <div className="text-gray-600">Email</div>
                                        <div className="mt-0.5">{ loggedInUser.email }</div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail w-4 h-4 text-gray-600 ml-auto"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                            </div>
                        </div>
                    ) }
                    {/* <!-- END: Side Content Profile --> */ }

                    {/* <!-- BEGIN: Side Content Contacts --> */ }
                    { tab === 'contacts' && (
                        <div className="side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 flex-col overflow-hidden" data-content="contacts">
                            <div className="intro-y text-xl font-medium">Contacts</div>
                            <div className="intro-y relative mt-5 mb-6">
                                <input type="text" className="form-control box py-3 px-4 border-transparent pr-8" placeholder="Search for contacts..." onKeyUp={(e) => {searchContact(e)}} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search text-gray-600 w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                            <div className="intro-y overflow-y-auto scrollbar-hidden -mx-5 px-5">
                                <div className="user-list">
                                    <div className="intro-x">
                                        { contacts.map((contact, index) => (
                                            <div key={ index } onClick={ () => { setActiveContact(contact) } }>
                                                <Link to={ `/${ contact.username }` }>
                                                    <div className={ activeContact === contact ? ' zoom-in chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 bg-theme-1 dark:bg-theme-1' : 'chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4  zoom-in' }>
                                                        <div className="w-10 h-10 flex-none image-fit mr-1">
                                                            <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={ "http://topson.left4code.com/dist/images/" + contact.image } />
                                                            <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                                        </div>
                                                        <div className="ml-2 overflow-hidden">
                                                            <p className={ activeContact === contact ? 'text-white font-medium' : 'font-medium text-gray-800' }>{ contact.name }</p>
                                                            <div className="flex items-center text-xs mt-0.5">
                                                                <div className={ activeContact === contact ? 'text-opacity-80 w-4/5 truncate mt-0.5 text-white' : 'text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800' }>Last seen 26 seconds ago ago</div>
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
                    ) }
                    {/* <!-- END: Side Content Contacts --> */ }

                    {/* <!-- BEGIN: Side Content Chats --> */ }
                    { tab == 'chats' && (
                        <div className="side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 side-content--active flex-col overflow-hidden" data-content="chats">
                            <div className="intro-y text-xl font-medium">Chats</div>
                            <div className="intro-y relative mt-5">
                                <input type="text" className="form-control box py-3 px-4 border-transparent pr-8" placeholder="Search for messages or users..."  />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search text-gray-600 w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                            <div className="intro-y text-base font-medium leading-tight mt-3">Recent Chats</div>
                            <div className="intro-y overflow-y-auto scrollbar-hidden pt-2 mt-3 -mx-5 px-5">
                                { chats.map((chat, index) => (
                                    <div className="intro-x my-3" key={ index } onClick={ () => { setActiveChat(chat) } }>
                                        <Link to={ `/${ chat.username }` }>
                                            <div className="zoom-in">
                                                <div className={ activeChat === chat ? 'chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4 bg-theme-1 dark:bg-theme-1' : 'chat-list box cursor-pointer relative flex items-center px-4 py-3 mt-4' }>
                                                    <div className="w-12 h-12 flex-none image-fit mr-1">
                                                        <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={ "http://topson.left4code.com/dist/images/" + chat.image } />
                                                        <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                                    </div>
                                                    <div className="ml-2 overflow-hidden">
                                                        <p className={ activeChat === chat ? 'text-white font-medium' : 'font-medium text-gray-800' }>{ chat.name }</p>
                                                        <div className={ activeChat === chat ? 'text-opacity-80 w-4/5 truncate mt-0.5 text-white' : 'text-opacity-80 w-4/5 truncate mt-0.5 text-gray-800' }>{ chat.message }</div>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <div className="whitespace-nowrap text-opacity-80 text-xs text-white">03:20 PM</div>
                                                    </div>
                                                    <div className="bg-theme-1 flex items-center justify-center absolute top-0 right-0 text-xs rounded-full font-medium mr-4"></div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )) }

                            </div>
                        </div>
                    ) }
                    {/* <!-- END: Side Content Chats --> */ }

                    {/* <!-- BEGIN: Chat Box --> */ }
                    <div className="chat-box border-theme-5 col-span-12 xl:col-span-6 flex flex-col overflow-hidden xl:border-l xl:border-r p-6">
                        {/* <!-- BEGIN: Chat Box Top Bar --> */ }
                        <div className="intro-y box border border-theme-3 dark:bg-dark-2 dark:border-dark-2 flex items-center px-5 py-4">
                            <div className="flex items-center mr-auto">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={ activeUserChat ? 'http://topson.left4code.com/dist/images/' + activeUserChat.image : 'http://topson.left4code.com/dist/images/profile-9.jpg' } />
                                    <div className="bg-green-500 w-3 h-3 absolute right-0 top-0 rounded-full border-2 border-white"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <a href="#" className="text-base font-medium">{ activeUserChat ? activeUserChat.name : 'Dummy User' }</a>
                                    <div className="text-gray-600">Online</div>
                                </div>
                            </div>
                            <a className="text-gray-600 hover:text-theme-1" href=""> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-camera w-4 h-4 sm:w-6 sm:h-6"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg> </a>
                            <a className="text-gray-600 hover:text-theme-1 ml-2 sm:ml-5" href=""> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mic w-4 h-4 sm:w-6 sm:h-6"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg> </a>
                        </div>
                        {/* <!-- END: Chat Box Top Bar --> */ }

                        {/* <!-- BEGIN: Chat Box Content --> */ }
                        <div className="overflow-y-scroll scrollbar-hidden pt-5 flex-1">
                            {/* <!-- BEGIN: Chat Text --> */ }
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
                            {/* <!-- END: Chat Text --> */ }
                            <div className="clear-both"></div>
                            {/* <!-- BEGIN: Chat Text --> */ }
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
                            {/* <!-- END: Chat Text --> */ }
                            <div className="clear-both"></div>
                            <div className="intro-y text-gray-500 text-xs text-center mb-6 mt-5">12 June 2020</div>
                            {/* <!-- BEGIN: Chat Text --> */ }
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
                            {/* <!-- END: Chat Text --> */ }
                            <div className="clear-both"></div>
                            {/* <!-- BEGIN: Chat Text --> */ }
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
                            {/* <!-- END: Chat Text --> */ }
                            <div className="clear-both"></div>
                            {/* <!-- BEGIN: Chat Text --> */ }
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
                            {/* <!-- END: Chat Text --> */ }
                        </div>
                        {/* <!-- END: Chat Box Content --> */ }

                        {/* <!-- BEGIN: Chat Box Input --> */ }
                        <div className="intro-y chat-input box border-theme-3 dark:bg-dark-2 dark:border-dark-2 border flex items-center px-5 py-4">
                            {/* <!-- BEGIN: Chat Input Dropdown --> */ }
                            <div className="dropdown relative" data-placement="top">
                                <a href="#" className="text-gray-600 hover:text-theme-1 dropdown-toggle" onClick={ () => { setAttachment(!attachment) } }>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus w-5 h-5 sm:w-6 sm:h-6"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </a>
                                { attachment && (
                                    <div className="chat-input__dropdown dropdown-menu">
                                        <div className="dropdown-menu__content p-2">
                                            <a href="" className="shadow-md text-gray-600 bg-white  dark:text-gray-300 dark:bg-dark-3 hover:bg-theme-1 hover:text-white dark:hover:bg-theme-1 flex items-center p-3 transition duration-300 rounded-md mb-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-camera w-5 h-5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg> </a>
                                            <a href="" className="shadow-md text-gray-600 bg-white  dark:text-gray-300 dark:bg-dark-3 hover:bg-theme-1 hover:text-white dark:hover:bg-theme-1 flex items-center p-3 transition duration-300 rounded-md mb-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mic w-5 h-5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg> </a>
                                            <a href="" className="shadow-md text-gray-600 bg-white  dark:text-gray-300 dark:bg-dark-3 hover:bg-theme-1 hover:text-white dark:hover:bg-theme-1 flex items-center p-3 transition duration-300 rounded-md mb-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> </a>
                                        </div>
                                    </div>
                                ) }
                            </div>
                            {/* <!-- END: Chat Input Dropdown --> */ }
                            <textarea className="form-control h-12 shadow-none resize-none border-transparent px-5 py-3 focus:shadow-none truncate mr-3 sm:mr-0" rows="1" placeholder="Type your message..."></textarea>
                            {/* <!-- BEGIN: Chat Smiley Dropdown --> */ }
                            <div className="dropdown relative mr-3 sm:mr-5" data-placement="top-end">
                                <a href="#" className="text-gray-600 hover:text-theme-1 dropdown-toggle w-4 h-4 sm:w-5 sm:h-5 block"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smile w-full h-full"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg> </a>
                            </div>
                            {/* <!-- END: Chat Smiley Dropdown --> */ }
                            <a href="#" className="bg-theme-1 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-none flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send w-4 h-4 sm:w-5 sm:h-5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> </a>
                        </div>
                        {/* <!-- END: Chat Box Input --> */ }

                    </div>
                    {/* <!-- END: Chat Box --> */ }

                    {/* <!-- BEGIN: Right Content Info --> */ }
                    <div className="info-content col-span-12 xl:col-span-3 flex flex-col overflow-hidden pl-6 xl:pl-0 pr-6">
                        <div className="overflow-y-auto scrollbar-hidden py-6">
                            {/* <!-- BEGIN: Profile --> */ }
                            <div className="intro-y box relative px-4 py-6">
                                <a href="#" className="text-gray-600 tooltip w-8 h-8 flex items-center justify-center absolute top-0 right-0 mr-1 mt-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2 w-4 h-4"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> </a>
                                <div className="w-20 h-20 mx-auto image-fit">
                                    <img alt="Topson Messenger Tailwind HTML Admin Template" className="rounded-full" src={ "http://topson.left4code.com/dist/images/" + activeContact.image } />
                                    <div className="bg-green-500 border-white w-3 h-3 absolute right-0 top-0 mt-1 mr-1 rounded-full border-2"></div>
                                </div>
                                <div className="text-base font-medium text-center mt-3">{ activeContact.name }</div>
                                <div className="text-gray-600 text-center text-xs uppercase mt-0.5">{ activeContact.designation }</div>
                            </div>
                            {/* <!-- END: Profile --> */ }
                            {/* <!-- BEGIN: Detail Profile --> */ }
                            <div className="intro-y box p-4 mt-3">
                                <div className="text-base font-medium">Personal Information</div>
                                <div className="mt-4">
                                    <div className="border-gray-200 dark:border-dark-5 flex items-center border-b pb-3">
                                        <div className="">
                                            <div className="text-gray-600">Country</div>
                                            <div className="mt-0.5">{ activeContact.country }</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe w-4 h-4 text-gray-600 ml-auto"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                    </div>
                                    <div className="border-gray-200 dark:border-dark-5 flex items-center border-b py-3">
                                        <div className="">
                                            <div className="text-gray-600">Phone</div>
                                            <div className="mt-0.5">{ activeContact.phone }</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mic w-4 h-4 text-gray-600 ml-auto"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                                    </div>
                                    <div className="border-gray-200 dark:border-dark-5 flex items-center py-3">
                                        <div className="">
                                            <div className="text-gray-600">Email</div>
                                            <div className="mt-0.5">{ activeContact.email }</div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail w-4 h-4 text-gray-600 ml-auto"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END: Detail Profile --> */ }
                        </div>
                    </div>
                    {/* <!-- END: Right Content Info --> */ }
                </div>
            </div>


        </>
    );
}

export default Home;
