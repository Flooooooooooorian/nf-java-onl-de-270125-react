import {useNavigate} from "react-router";

export type ContentProps = {
    name: string,
    text: string,
    likes: number,
    id: string
    myOnClick: () => void,
    // blogPost: {
    //     name: string,
    //     text: string,
    //     likes: number
    // }
}

export default function Content(props: ContentProps) {
    const navigate = useNavigate()

    const onDetailsClick = () => {
        navigate("/blog/" + props.id)
    }

    return (
        <div>
            <article>
                <p>{props.name}</p>
                <p>{props.text}</p>
                <p>{props.likes}</p>
                <button onClick={props.myOnClick}>Like</button>
                <button onClick={onDetailsClick}>Details</button>
            </article>
        </div>
    )
}
