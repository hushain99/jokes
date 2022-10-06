import React, {useRef} from "react";
import "./header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCaretDown, faCaretRight, faMultiply, faBars  } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const leftMenu = useRef();

    function closeLeftMenu() {
        leftMenu.current.style.display = 'none';
    }
    function openLeftMenu() {
        leftMenu.current.style.display = 'flex';
    }

    return (
        <div className='header'>
            <nav>
                <div className={'top-menu'}>
                    <a href="#">SO FUNKTIONIERT'S</a>
                    <a href="#">SONDERANGEBOTE</a>
                    <a href="#"> <FontAwesomeIcon icon={faUser} /> MEIN BEREICH <FontAwesomeIcon icon={faCaretDown} />
                    <div>
                        <ul className={'sub-menu'}>
                            <li>My Published Jokes</li>
                            <li>My Saved Jokes</li>
                            <li>Account Information</li>
                            <li>Publish New Jokes</li>
                        </ul>
                    </div>
                    </a>
                </div>

                <FontAwesomeIcon className={'open-side-menu'} icon={faBars} title={'Open'} onClick={openLeftMenu} />

                <div ref={leftMenu} className={'side-menu'}>
                    <FontAwesomeIcon className={'close-side-menu'} icon={faMultiply} title={'Close'} onClick={closeLeftMenu} />
                    <a href="#"><FontAwesomeIcon icon={faUser} /> <span>SO FUNKTIONIERT'S</span></a>
                    <a href="#"><FontAwesomeIcon icon={faUser} /> <span>SONDERANGEBOTE</span></a>
                    <a href="#"> <FontAwesomeIcon icon={faUser} /> <span>MEIN BEREICH</span> <FontAwesomeIcon icon={faCaretRight} />
                    <div>
                        <ul className={'sub-menu'}>
                            <li>My Published Jokes</li>
                            <li>My Saved Jokes</li>
                            <li>Account Information</li>
                            <li>Publish New Jokes</li>
                        </ul>
                    </div>
                    </a>
                </div>
            </nav>

            <div className={'hero-content'}>
                <div>
                    <h1>The Joke Bible</h1>
                    <h3>Daily Laughs For You And Yours</h3>
                    <div className={'search-joke'}>
                        <input type="text" id={'search-joke'} placeholder={'How can we make you laugh today?'} />
                        <FontAwesomeIcon className={'mgf'} icon={faMagnifyingGlass} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;
