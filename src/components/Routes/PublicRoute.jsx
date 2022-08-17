import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children, restricted, navigateTo }) {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const shouldNavigate = isLoggedIn && restricted;

    return shouldNavigate ? <Navigate to={navigateTo} /> : children;
}

PublicRoute.propTypes = {
    children: PropTypes.element.isRequired,
    restricted: PropTypes.bool,
    navigateTo: PropTypes.string,
};
