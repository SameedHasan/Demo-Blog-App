import Link from "next/link";
import React from "react";

export default function BlogPage(props: any) {
  console.log("props", props);
  const blogId = props.params["blod-id"];
  return (
    <div className="blog-post">
      <div className="blog-header">
        <h1 className="blog-title">{blogId}</h1>
        <p className="blog-category">Backend</p>
      </div>
      <div className="blog-content">
        <p>
          GraphQL is a query language for APIs and a server-side runtime for
          executing queries by specifying the shape and structure of the
          response...
        </p>
      </div>
      <div className="blog-footer">
        <Link href="/blogs" className="back-to-blog">
          Back to Blogs
        </Link>
      </div>
    </div>
  );
}
