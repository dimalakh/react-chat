import { connect } from 'react-redux';

import { Auth } from '../components/auth/auth';
import { logIn, signUp } from '../actions/auth';

const mapStateToProps = state => ({
  user: state
});

const mapDispatchToProps = dispatch => ({
    onLogIn: (data) => {
        dispatch(logIn(data));
    },
    onSignUp: (data) => {
        dispatch(signUp(data));
    }
});

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

export default AuthContainer;