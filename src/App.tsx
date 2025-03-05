import Header from "./Header.tsx";
import Content from "./Content.tsx";
import "./App.css"

export default function App() {
    //logic
    const myBlogPosts = [
        {name: "My First Blog Post 12345", text: "Lorem Ipsum", likes: 3},
        {name: "My Second Blog post", text: "React", likes: 19}
    ]

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
        </div>
    )
}
