import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { Image, Card } from 'semantic-ui-react'
import { IBlog, fetchBlogs } from "@/apicalls/blog";

type BlogCardProps = {

    blog: IBlog;

}

export default function BlogCard(props: BlogCardProps) {

    const { blog } = props;

    return (
        <main>
            <Card>
                <Card.Content>
                    <Card.Header>{blog.title}</Card.Header>
                    <Card.Meta>UserID: {blog.userId}</Card.Meta>
                    <Card.Meta>Reactions: {blog.reactions}</Card.Meta>
                </Card.Content>
            </Card>
        </main>
    )

}