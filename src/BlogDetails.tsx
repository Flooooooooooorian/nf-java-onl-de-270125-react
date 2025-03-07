import {useNavigate, useParams} from "react-router";
import {Post} from "./Blog.ts";

type BlogDetailsProps = {
    blogPosts: Post[]
}

export default function BlogDetails(props: BlogDetailsProps) {

    const params = useParams()
    const navigate = useNavigate()

    const post = props.blogPosts.find((element) => element.id === params.id)

    const onBackClick = () => {
        navigate(-1)
    }

    if (post === undefined) {
        return <p>
            Blog Post nicht gefunden!
        </p>
    }

    return (
        <div>
            <p>Blog Details: {params.id}</p>
            <p>{post.name}</p>
            <p>{post.text}</p>
            <p>{post.likes}</p>
            <button onClick={onBackClick}>Back</button>
        </div>
    )
}
