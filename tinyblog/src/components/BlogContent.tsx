import { IBlog } from "@/apicalls/blog";
import { Header, Card, Icon } from 'semantic-ui-react'
import BlogCard from "./BlogCard";
import { sections } from "@/type/type";


type BlogContentProps = {
    blogs: IBlog[],
    filterValue: string
}


export default function BlogContent(props: BlogContentProps) {
    const { blogs, filterValue } = props;

    return (

        <div className="blog-card-container">
            {sections.filter((section) => {
                if (filterValue === 'all') {
                    return true;
                }
                return section.text === filterValue
            }).map(section => {
                return (
                    <main key={section.key} className="blog-main">
                        <Header className="blog-section-header" size="medium" color="green" block>
                            <Icon name="tags" />
                            <Header.Content>{section.text}</Header.Content>
                        </Header>
                        <Card.Group className="blog.card.group" >
                            {blogs.filter(blog => blog.tags.find(tag => tag === section.text)).map((blog) => {
                                return (

                                    <BlogCard key={blog.id} blog={blog} section={section.text}/>

                                )
                            })}
                        </Card.Group>
                    </main>

                )
            })}

        </div>

    )

}