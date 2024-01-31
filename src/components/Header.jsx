import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Header() {
  /*bileşen ilk defa render edildiğinde kullanıcının giriş yapmış olup olmadığını kontrol eder. Eğer kullanıcı giriş yapmamışsa, "/login" sayfasına yönlendir */
  const history = useHistory();
  useEffect(() => {
    const isUserLoggedIn = localStorage
      .getItem('s11d2')
      .hasOwnProperty('token');

    // Eğer kullanıcı giriş yapmamışsa, '/login' sayfasına yönlendir.
    if (!isUserLoggedIn) history.push('/login');
  }, []);

  return (
    <div>
      <div className="loginFormHeaderDiv">
        <div>
          <h1>FRIENDS DATABASE</h1>
        </div>
        <div className="loginFormHeaderButtonDiv">
          <button onClick={() => history.push('./friends')}>
            FRIENDS LIST
          </button>
          <button onClick={() => history.push('./friends/add')}>
            ADD FRIEND
          </button>
          <button onClick={() => history.push('./logout')}>LOGOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
