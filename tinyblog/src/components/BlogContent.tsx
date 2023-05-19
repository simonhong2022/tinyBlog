import { IBlog, fetchBlogs } from "@/apicalls/blog";
import { useEffect, useState } from "react";
import { Button, Modal, Input, Form, Label, Message } from 'semantic-ui-react'
import BlogCard from "./BlogCard";

export default function BlogContent() {
    const [blogs, setBlogs] = useState<IBlog[]>([]);

    useEffect(() => {

        fetchBlogs(setBlogs);

    }, []);

    return (

        <div>
            <div className="blog-card-box">
                {blogs.map((blog) => {
                    return (

                        <BlogCard blog={blog} />

                    )
                })}
            </div>

        </div>

    )

}