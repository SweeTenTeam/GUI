import React from 'react'
import Switch from './Switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';



const Navbar: React.FC = () => {
    return (
        <nav>
            <ul className='nav-list'>
                <li id='git' className="list-li">
                    <a className='nav-link' href="https://docs.github.com/en">
                        GitHub
                        <span className="icon" ><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' /></span>
                    </a>
                </li>
                <li id='jira' className="list-li">
                    <a className='nav-link' href="https://confluence.atlassian.com/jira">
                        Jira
                        <span className="icon" ><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' /></span>
                    </a>
                </li>
                <li id='confl' className="list-li">
                    <a className='nav-link' href="https://support.atlassian.com/confluence-cloud/resources/">
                        Confluence
                        <span className='icon'><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' /></span>
                    </a>
                </li >
                {/* <li id='azzurro' className="list-li">
                    <a className='nav-link' href="https://azzurrodigitale.com">
                        <img className='azzurro' src='/azzurro.png' alt='Azzurro Digitale' />
                    </a>
                </li> */}
            </ul >

            <div id='theme-switcher'>
                <Switch />

            </div>
        </nav >
    )
}

export default Navbar;
