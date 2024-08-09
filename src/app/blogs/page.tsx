import Link from "next/link";
import React from "react";

export default function BlogsPage() {
  return (
    <div className="blog-list">
      <h1>Blogs</h1>
      <div className="blog-cards">
        <div className="blog-card">
          <Link href={"/blogs/blog-1"}>
            <img
              src={"https://via.placeholder.com/150/33FF57/FFFFFF?text=Next.js"}
              alt={"Next.js for Beginners"}
              className="blog-image"
            />
            <h2>Next.js for Beginners</h2>
            <p>
              An introduction to Next.js, the React framework for production.
            </p>
          </Link>
        </div>

        <div className="blog-card">
          <Link href={"/blogs/blog-2"}>
            <img
              src={"https://via.placeholder.com/150/33FF57/FFFFFF?text=Next.js"}
              alt={"Next.js for Beginners"}
              className="blog-image"
            />
            <h2>Blog 2</h2>
            <p>
              An introduction to Next.js, the React framework for production.
            </p>
          </Link>
        </div>

        <div className="blog-card">
          <Link href={"/blogs/blog-3"}>
            <img
              src={"https://via.placeholder.com/150/33FF57/FFFFFF?text=Next.js"}
              alt={"Next.js for Beginners"}
              className="blog-image"
            />
            <h2>Blog 3</h2>
            <p>
              An introduction to Next.js, the React framework for production.
            </p>
          </Link>
        </div>

        <div className="blog-card">
          <Link href={"/blogs/blog-4"}>
            <img
              src={"https://via.placeholder.com/150/33FF57/FFFFFF?text=Next.js"}
              alt={"Next.js for Beginners"}
              className="blog-image"
            />
            <h2>Blog 3</h2>
            <p>
              An introduction to Next.js, the React framework for production.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
