import './style.css';
import { connect } from 'react-redux'
import {ILogoutProps} from '../../../interfaces';
import {logout} from '../../../store/user/actions';

export const Logout = ({ logout }: ILogoutProps) => {
    return (
        <button className="logout" type="submit" onClick={logout}>Log Out</button>
    );
}
export default connect(null, { logout })(Logout);