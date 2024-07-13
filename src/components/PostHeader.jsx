
import { Link } from "react-router-dom";

export default function PostHeader() {
    const username = 'fulano-de-tal';
    return (
        <div className="flex items-center gap-2">
            <img src="/public/profile.avif" 
                className="rounded-full w-10 h-10 object-cover object-top ml-3" />
            <Link to={"author/" + username } className="underline">Fulano de tal</Link>
            <span>-</span>
            <span>20/10/2024</span>
        </div>
    );
}