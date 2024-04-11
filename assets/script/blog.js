let blog = {
  userName: "",
  title: "",
  content: "",
};
let userBlogDetails = [];
let userName;
let title;
let content;
blog = JSON.parse(localStorage.getItem("blogDetails"));
// userBlogDetails=[blog];
userBlogDetails.push(blog);
for (let i = 0; i < userBlogDetails.length; i++) {
  // console.log(blog[i].userName);
  // console.log(blog[i].title);
  // console.log(blog[i].content);
  userName = blog[i].userName;
  title = blog[i].title;
  content = blog[i].content;

  let div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.color = "white";
  div.style.paddingRight = "100%";
  div.style.paddingBottom = "10%";
  div.innerHTML = title + "<br>" + content + "<br>" + userName;
  document.body.appendChild(div);
}
button.addEventListener("click", function (event) {});
