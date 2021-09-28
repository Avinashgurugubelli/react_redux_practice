import { useSelector, useDispatch } from 'react-redux';
import AppNavBar from '../common/app-nav-bar';

import { increment, decrement} from './actions/counter-actions';
import { signIn} from './actions/loggedin_actions'

function ReactReduxExampleHost() {

    const counter = useSelector(state => state.counter);
    const isLoggedIn = useSelector(state => state.loggedIn);

    const dispatch = useDispatch();

    return (
        <>
            <AppNavBar />
            <div className="p-5 mb-4 bg-light rounded-3 container-fluid">

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <h1>Counter value: {counter}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5">
                                    <button type="button" class="btn btn-primary" onClick={() => dispatch(increment(5))}>increment</button>
                                </div>
                                <div className="col-5">
                                    <button type="button" class="btn btn-primary" onClick={() => dispatch(decrement())}>decrement</button>
                                </div>

                            </div>
                        </div>
                        <div className="col">
                            {isLoggedIn ? <h1>User is logged in</h1> : <h1>User is not logged in</h1>}

                            <button type="button" class="btn btn-info" onClick={() => dispatch(signIn())}>{!isLoggedIn ? 'login' : 'logout'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReactReduxExampleHost;