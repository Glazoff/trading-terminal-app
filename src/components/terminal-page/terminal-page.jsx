import {useState} from 'react';

import TargedingComponent from '../targedinng-component/targeding-component.jsx'
import ArchiveComponent from '../archive-component/archive-component.jsx'

function TerminalPage () {
    const [isTargedingActive, SetTargedingActive] = useState(true);

    return (
        <div className="block-app">
            <div className="block-nav">
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <button
                            className={`nav-list-buttom ${isTargedingActive ? 'nav-list-buttom-active': ''}`}
                            onClick={() => SetTargedingActive(true)}
                        >
                            Trading
                        </button>
                    </li>
                    <li className="nav-list-item">
                        <button 
                            className={`nav-list-buttom ${isTargedingActive ? '': 'nav-list-buttom-active'}`}
                            onClick={() => SetTargedingActive(false)}
                        >
                            Archive
                        </button>
                    </li>
                </ul>
            </div>
            {isTargedingActive ? 
                <TargedingComponent/>:
                <ArchiveComponent/>
            }
            
        </div>
    );
}

export default TerminalPage;