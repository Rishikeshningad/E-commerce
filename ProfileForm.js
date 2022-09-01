import { useRef, useContext } from 'react';
import {useHistory} from 'react';

import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  
  const newPasswordInputRef = useRef();
  const authctx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // add validation

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDt8YinXVEx0C7pqrKBiYFIaGPM4P9HrBc',{
      method: 'POST',
      body: JSON.stringify({
        idToken: authctx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => {
      // assumption: Always succeeds! 
      history.replace('/auth');
    })
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password'minLength='7' ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
