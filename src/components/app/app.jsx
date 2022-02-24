import TerminalPage from '../terminal-page/terminal-page.jsx'
import {randomСourses} from '../../utils/utils.js';
import {useDispatch} from "react-redux";
import {useEffect} from 'react';


function App () {
    const dispatch = useDispatch();
    
    useEffect(() => {
        setTimeout(() => {
            const coursNow = randomСourses();
            dispatch({type: 'SET_COURS', courses: coursNow})
        }, 0)
    })

    return(
        <TerminalPage/>
    );
}

export default App;