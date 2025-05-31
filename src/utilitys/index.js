import toast from "react-hot-toast";

export const getBlogs = () => {
  let blogs = [];
  const storedItem = localStorage.getItem("blogs");
  if (storedItem) {
    blogs = JSON.parse(storedItem);
  }
  return blogs;
};

export const saveBlogs = (blog) => {
  let blogs = getBlogs();
  const isExist = blogs.find((b) => b.id === blog.id);
  if (isExist) {
    toast.error("Already Bookmarked");
    return;
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("Blog Bookmarked Successfully");
};

export const deleteBlog = (id) => {
  const blogs = getBlogs();
  const remaining = blogs.filter((b) => b.id !== id);
  localStorage.setItem("blogs", JSON.stringify(remaining));
  toast.success("Removed Successfully");
};
