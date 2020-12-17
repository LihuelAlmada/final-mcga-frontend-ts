//import './style.css';
import { connect } from 'react-redux'
import {ILogoutProps} from '../../../interfaces';
import {logout} from '../../../store/user/actions';

export const Logout = ({ logout }: ILogoutProps) => {
    return (
        <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-xl-4 mt-2 row justify-content-center">
                <button className="btn btn-warning btn-block" type="submit" onClick={logout}>Log Out</button>
            </div>    
        </div>
    );
}
export default connect(null, { logout })(Logout);