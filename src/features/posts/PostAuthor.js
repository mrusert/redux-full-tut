import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { Link } from "react-router-dom";

const PostAuthor = ( {userId} ) => {
    const users = useSelector(selectAllUsers)
    const author = users.find(user => user.id === userId)
    return (
            <span>by <Link to={`/user/${userId}`}>{author ? author.name: 'Unknown Author'}</Link></span>
        )
}

export default PostAuthor