import Header from "./Header.tsx";
import Content from "./Content.tsx";
import "./App.css"
import {Post} from "./Blog.ts";
import {data} from "./data.ts";
import Counter from "./Counter.tsx";

export default function App() {
    //logic
    const myBlogPosts: Post[] = data;

    const myValue = 2;

    const myOnClick = () => {
        console.log("Like!")
        console.log(myValue)
    }

    return (
        <div>
            <Header/>
            <p>Hello World</p>
            {
                myBlogPosts.map((blogPost) => (
                    <Content
                        name={blogPost.name}
                        text={blogPost.text}
                        likes={blogPost.likes}
                        // blogPost={blogPost}
                        myOnClick={myOnClick}/>)
                )
            }

            <Counter />
        </div>
    )
}
