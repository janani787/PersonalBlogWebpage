//Declaring global variable
//get element id from txtbox user name , title and content

const userNameId =document.getElementById('txtUserName');
const titleId= document.getElementById('txtTitle');
const contentId = document.getElementById('txtContent');
const submit=document.getElementById('submit');

submit.addEventListener('click',function(event)
{
    let existingBlog = {
        userName:'',
      title:'',
        content:''
    
    };
    let newBlog = {
        userName:userNameId.value.trim(),
      title:titleId.value.trim(),
        content:contentId.value.trim()
    
    };
    //  let userBlogDetails=[];
    //  let user =JSON.parse(localStorage.getItem("blogDetails")||"[]");
    //  userBlogDetails=[user];
    //  userBlogDetails.push(blog);
    // localStorage.setItem('blogDetails',JSON.stringify((userBlogDetails)));
    // window.location.href=".//blog.html";

    let userBlogDetails=[];
    localStorage.clear();
   
    existingBlog=JSON.parse(localStorage.getItem("blogDetails"));
    // userBlogDetails=[blog];
    userBlogDetails.push(existingBlog);
    userBlogDetails.push(newBlog);
   userBlogDetails.shift();
    localStorage.setItem('blogDetails',JSON.stringify((userBlogDetails)));
    window.location.href=".//blog.html";
});



