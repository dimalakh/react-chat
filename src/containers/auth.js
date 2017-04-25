import { connect } from 'react-redux';

import { Auth } from '../components/auth/auth';
import { auth, signUp } from '../actions/auth';

const mapStateToProps = (state) => ({
  user: state
});

const mapDispatchToProps = (dispatch) => ({
    onLogIn: (type, name, pass, history) => {
        dispatch(auth(type, name, pass, history));
    },
    onSignUp: (type, name, pass, historyta) => {
        dispatch(auth(type, name, pass, history));
    }
});

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

export default AuthContainer;