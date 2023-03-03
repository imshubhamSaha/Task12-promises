const blogs = [];
function createBlog(val) {
  return new Promise((resolve, reject) => {
    blogs.push(val);
    resolve(blogs);
  });
}

function LastUserActivityTime() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const time = new Date();
      console.log(blogs);
      res(`lastSeen: ${time}`);
    }, 1000);
  });
}
function displayPost() {
  console.log(blogs);
}
Promise.all([createBlog({ title: "blog1" }), LastUserActivityTime()]).then(
  (msg) => console.log(msg[1])
);
