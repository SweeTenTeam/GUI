import React from 'react'
import Switch from './Switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faConfluence, faGithub, faJira } from '@fortawesome/free-brands-svg-icons';



const Navbar: React.FC = () => {
    return (
        <nav>
            <ul className='nav-list'>
                <li id='git' className="list-li">
                    <a className='nav-link' href="https://docs.github.com/en">
                        <FontAwesomeIcon icon={faGithub} size='lg' />
                        <p className='hidden'>GitHub</p>

                    </a>
                </li>
                <li id='jira' className="list-li">
                    <a className='nav-link' href="https://confluence.atlassian.com/jira">
                        <FontAwesomeIcon icon={faJira} size='lg' />
                        <p className='hidden'>Jira</p>

                    </a>
                </li>
                <li id='confl' className="list-li">
                    <a className='nav-link' href="https://support.atlassian.com/confluence-cloud/resources/">
                        <FontAwesomeIcon icon={faConfluence} size='lg' />
                        <p className='hidden'>Confluence</p>

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


        // <div id='nav'>
        //     <div className='left'>
        //         <ul className='nav-list'>
        //             <li id='git' className="list-li">
        //                 <a className='nav-link' href="https://docs.github.com/en">
        //                     GitHub
        //                     <span className="icon" ><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' /></span>
        //                 </a>
        //             </li>
        //             <li id='jira' className="list-li">
        //                 <a className='nav-link' href="https://confluence.atlassian.com/jira">
        //                     Jira
        //                     <span className="icon" ><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='xs' /></span>
        //                 </a>
        //             </li>
        //             <li id='confl' className="list-li">
        //                 <a className='nav-link' href="https://support.atlassian.com/confluence-cloud/resources/">
        //                     Confluence
        //                     
        //                 </a>
        //             </li >
        //             {/* <li id='azzurro' className="list-li">
        //                    <a className='nav-link' href="https://azzurrodigitale.com">
        //                        <img className='azzurro' src='/azzurro.png' alt='Azzurro Digitale' />
        //                    </a>
        //                </li> */}
        //         </ul >
        //     </div>
        //     <div className="right">
        //         <div id="theme-switcher">


        //             <Switch />

        //         </div>
        //     </div>
        // </div>
    )
}

export default Navbar;
