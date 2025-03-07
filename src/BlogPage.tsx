import Content from "./Content.tsx";
import {Post} from "./Blog.ts";

type BlogPageProps = {
    myBlogPosts: Post[]
    myOnClick: () => void
}

export default function BlogPage(props: BlogPageProps) {

    return (
        <div>
            {
                props.myBlogPosts.map((blogPost) => (
                    <Content
                        id={blogPost.id}
                        name={blogPost.name}
                        text={blogPost.text}
                        likes={blogPost.likes}
                        // blogPost={blogPost}
                        myOnClick={props.myOnClick}/>)
                )
            }
        </div>
    )
}
