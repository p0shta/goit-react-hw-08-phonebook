import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, navigateTo }) {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return isLoggedIn ? children : <Navigate to={navigateTo} />;
}

PrivateRoute.propTypes = {
    children: PropTypes.element.isRequired,
    navigateTo: PropTypes.string.isRequired,
};
