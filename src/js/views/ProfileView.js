import firebaseFunctions from '../firebase-functions.js';

export default () => {
  const profileView = `
    <div class="profile-post">
      <a href="#/feed" id="profile" class="btn-profile" >Feed</a>
      <a href="" id="logout-btn" class="btn-profile">LOGOUT</a>
    </div>
      
    <div id="user-info">
      <img class="perfil" src="./css/img_app/perfil.jpeg" alt="perfil">
      <h1 class="name">nombre usuario</h1>
      <h3 class="ubicacion">Valparaiso Chile</h3>
    </div>
      
    <div class="post"> 
      post
    </div>
        `;

  const profile = document.createElement('section');
  profile.id = 'profile-info';
  profile.innerHTML = profileView;
  const logoutButton = profile.querySelector('#logout-btn');
  logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    firebaseFunctions.logoutAccount();
  });

  return profile;
};
