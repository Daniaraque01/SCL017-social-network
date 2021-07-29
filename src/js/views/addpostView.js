export const modalCreatePost = () => {
  `
                    <div class="modal-container">
                    <nav class="modal modal-close-post">
                      <p class="close">X</p>
                      <button id="postBtn">Post</button>
                    </nav>
                      <div class="contentModal">
                        <div class="userInfo">
                        <img id="profilePic" class="profilePic" src="../css/img_app/perfil.jpeg"></img>              
                        <p>Luisa Ortiz<p>
                        </div>
                        <div class="textModal">
                          <div class="input-field">
                            <textarea id="writingZone" type="text" cols="30" rows="10" placeholder="Add something you'd like to share"></textarea>                                                  
                          </div>
                        </div>
                        <div class="tool-bar">
                          <img id="text-icon" class="textIcon" src="../css/img_app/vector_text.png"></img>
                          <img id="link-icon" class="linkIcon"src="../css/img_app/vector_link.png"></img>
                          <img id="addImg-icon" class="imgIcon" src="../css/img_app/vector_image.png"></img>
                        </div>  
                        </div>
                    </div>
                        `;

  const addPostElement = document.createElement("section");
  addPostElement.innerHTML = modalCreatePost;

  const openCreatePost = document.getElementsByClassName(".editBtn");
  const modalContainer = document.getElementsByClassName(".modal-container");
  const closeCreatePost = document.getElementsByClassName(".close");

  openCreatePost.addEventListener("click", () => {
    modalContainer.classList.add("show");
  });

  closeCreatePost.addEventListener("click", () => {
    modalContainer.classList.remove("show");
  });
  return addPostElement;
};

