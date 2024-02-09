import "./post.css"
import { MoreVert } from "@mui/icons-material"
import {Users} from "../../dummyData";
import { useState } from "react";

const usersById = Object.fromEntries(Users.map(user => [user.id, user]));

export default function Post({post}) {

    const [like,setLike] = useState(post.like);
    const [isLiked,setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like +1)
        setIsLiked(!isLiked)
    }

  // post.userId를 사용하여 직접 사용자 데이터에 액세스
  const user = usersById[post.userId];
  //const user = Users.filter(u=> u.id === post.userId)[0];

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={user.profilePicture} alt="" className="postProfileImg"/>
                    <span className="postUserName">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                    <span className="postUserName">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/like.png" onClick={likeHandler} alt="" />
                    <img className="likeIcon" src="/assets/heart.png"  onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
