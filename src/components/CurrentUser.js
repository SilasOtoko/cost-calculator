import React from 'react';
import { auth } from '../firebase';
import PropTypes from 'prop-types';

const CurrentUser = ({ user }) => {
  return (
    <div className="CurrentUser outline">
      <div className="CurrentUser--photo">
        <img src={user.photoURL} alt={user.displayName} />
      </div>
      <div className="CurrentUser--identification">
        <h3>{user.displayName}</h3>
        <p>{user.email}</p>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>
    </div>
  );
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
};

export default CurrentUser;
