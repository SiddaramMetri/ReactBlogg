import BloggCard from "./BloggCard";

const Blogs = () => {
    return (
        <>
        <div className="grid grid-cols-2 gap-12 ">
          <BloggCard/>
          <BloggCard/>
          <BloggCard/>
          <BloggCard/>
          <BloggCard/>
          </div>
        </>
    );
  };
  
  export default Blogs;
  