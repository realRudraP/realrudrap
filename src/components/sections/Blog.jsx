import { posts } from "../../data/blog";
import './Blog.css'
export default function Blog() {
  return (
    <section id="blog" className="section">
      <h2 className="section-title">$ ls blog/</h2>

      <div className="blog-list">
        {posts.map((post) => (
          <article key={post.id} className="blog-item">
            <p className="blog-meta">{post.date}</p>

            <h3 className="blog-title">
              <a href={post.external} target="_blank" rel="noreferrer">
                {post.title}
              </a>
            </h3>

            <p className="blog-summary">{post.summary}</p>

            <div className="blog-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
