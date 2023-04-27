import blogData from '../assets/data.json';

type BlogData = {
  id: number;
  title: string;
  cover: string;
  author: string;
};

export const Blog = () => {
  return (
    <>
      <div className="blog">
        <h1>Blog</h1>
        {blogData.map((blog: BlogData) => {
          return (
            <div key={blog.id} className="blog_card">
              <div>
                <h2>{blog.title}</h2>
                <img src={blog.cover} alt={blog.title} />
                <p>{blog.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
