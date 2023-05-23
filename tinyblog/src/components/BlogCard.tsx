import { useState } from "react";
import { Card, Icon, Modal, Button } from 'semantic-ui-react'
import { IBlog } from "@/apicalls/blog";

type BlogCardProps = {

    blog: IBlog;
    section: string;

}

export default function BlogCard(props: BlogCardProps) {
    const [open, setOpen] = useState(false);
    const { blog, section } = props;

    return (
        
            <Modal animation={false}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                    <Card>
                        <Card.Content >
                            <Card.Header>{blog.title}</Card.Header>
                            <Card.Meta>UserID: {blog.userId} | Reactions: {blog.reactions} </Card.Meta>
                            <Card.Description >
                                {blog.body}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            {blog.tags.map(tag => {

                                if (tag === section) {
                                    return (
                                        <a key={tag}>
                                            <Icon color='blue' name='hashtag' />
                                            <strong><ins>{tag}</ins></strong>
                                        </a>
                                    )
                                }
                                return (
                                    <a key={tag}>
                                        <Icon color='blue' name='hashtag' />
                                        {tag}
                                    </a>
                                )
                            })}

                        </Card.Content>
                    </Card>
                }>
                <Modal.Header >{blog.title}</Modal.Header>
                <Modal.Content>
                    <Modal.Description >
                        {blog.body}
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </Modal.Actions>

            </Modal>
     
    )

}