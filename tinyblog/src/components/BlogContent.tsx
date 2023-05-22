import { IBlog, fetchBlogs } from "@/apicalls/blog";
import { useEffect, useState } from "react";
import { Button, Modal, Input, Form, Label, Message, Header, Card } from 'semantic-ui-react'
import BlogCard from "./BlogCard";

export const sections = [

    {
        key: 'american',
        text: 'american',
        value: 'american',
    },
    {
        key: 'french',
        text: 'french',
        value: 'french',
    },
    {
        key: 'history',
        text: 'history',
        value: 'history',
    },
    {
        key: 'crime',
        text: 'crime',
        value: 'crime',
    },
    {
        key: 'love',
        text: 'love',
        value: 'love',
    }

]

type BlogContentProps = {
    blogs: IBlog[],
    filterValue: string
}


export default function BlogContent(props: BlogContentProps) {
    const { blogs, filterValue } = props;

    return (

        <div className="blog-card-box">
            {sections.filter((section) => {
                if (filterValue === 'all') {
                    return true;
                }
                return section.text === filterValue
            }).map(section => {
                return (
                    <Card.Group key={section.key}>
                        <Header size="medium"><strong><ins>{section.text}</ins></strong></Header>
                        {blogs.filter(blog => blog.tags.find(tag => tag === section.text)).map((blog) => {
                            return (

                                <BlogCard key={blog.id} blog={blog} />

                            )
                        })}
                    </Card.Group>

                )
            })}

        </div>

    )

}