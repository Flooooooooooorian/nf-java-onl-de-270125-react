
type ContentProps = {
    name: string,
    text: string,
    likes: number,
    myOnClick: () => void,
    // blogPost: {
    //     name: string,
    //     text: string,
    //     likes: number
    // }
}

export default function Content(props: ContentProps) {

    return (
        <div>
            <article>
                <p>{props.name}</p>
                <p>{props.text}</p>
                <p>{props.likes}</p>
                <button onClick={props.myOnClick}>Like</button>
            </article>
        </div>
    )
}
