import "./css/styles.css";
import { getPublishedBlogPosts, renderPosts } from "./js/posts.js";
import { renderHeader } from "./js/header.js";
import { 
  showModalViaLoginButton,
   closeModalViaCloseModalButton,
    renderModal
  } from "./js/modal.js";
import { renderFooter } from "./js/footer.js";
import { getCurrentUser } from "./js/auth.js";

async function init() {
  // const userData = await getCurrentUser();
  const userData = await getCurrentUser();
  console.log("Logged in as: ", userData);
  
  const postData = await getPublishedBlogPosts();

  // if (userData.user) {
  //   renderHeader(userData.user);    
  // } else {
  //   renderHeader();
  // }
  renderHeader(userData.user);
  renderPosts(postData.posts);
  showModalViaLoginButton(); 
  renderModal();  
  closeModalViaCloseModalButton();
 
  renderFooter();

  // console.log(data.posts);
}

init();
