import Header from "./Header.tsx";
import "./App.css"
import {data} from "./data.ts";
import Counter from "./Counter.tsx";
import {Route, Routes} from "react-router";
import BlogPage from "./BlogPage.tsx";
import BlogDetails from "./BlogDetails.tsx";
import {useState} from "react";

export default function App() {
    //logic

    const [posts, setPosts] = useState(data)

    const myValue = 2;

    const myOnClick = () => {
        console.log("Like!")
        console.log(myValue)
    }

    return (
        <div>
            <Header/>

            <Routes>
                <Route path={"/"} element={<p>Hello World</p>} />
                <Route path={"/blog"} element={<BlogPage myBlogPosts={posts} myOnClick={myOnClick} /> } />
                <Route path={"/blog/:id"} element={<BlogDetails blogPosts={posts}/> } />
                <Route path={"/counter"} element={<Counter />} />

            </Routes>
        </div>
    )
}
