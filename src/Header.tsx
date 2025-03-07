import {NavLink, useNavigate} from "react-router";

export default function Header() {
    //logic
    const navigate = useNavigate()

    const onBackClick = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>My Blog</h1>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/counter"}>Counter</NavLink>
            <button onClick={onBackClick}>Back</button>
        </div>

    )
}

