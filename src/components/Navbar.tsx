import React from 'react'
import Switch from './Switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';



const Navbar: React.FC = () => {
    return (
        <nav>
            <ul className='nav-list'>
                <li id='git' className="list-li">
                    <a className='link' href="https://docs.github.com/en">
                        GitHub
                        <FontAwesomeIcon className="icon" icon={faArrowUpRightFromSquare} />
                    </a>
                </li>
                <li id='jira' className="list-li">
                    <a className='link' href="https://confluence.atlassian.com/jira">
                        Jira
                        <FontAwesomeIcon className="icon" icon={faArrowUpRightFromSquare} />
                    </a>
                </li>
                <li id='confl' className="list-li">
                    <a className='link' href="https://support.atlassian.com/confluence-cloud/resources/">
                        Confluence
                        <FontAwesomeIcon className="icon" icon={faArrowUpRightFromSquare} />
                    </a>
                </li >
            </ul >

            <div id='theme-switcher'>
                <Switch />
            </div>
        </nav >
    )
}

export default Navbar;
