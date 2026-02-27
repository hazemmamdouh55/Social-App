import { Heart, MessageCircle, Send, MoreHorizontal } from "lucide-react";
import { useContext, useState } from "react";
import timeAgo from "../utilitis/utilitis";
import { Link, useParams } from "react-router";
import CommentsList from "../comments/commentListing";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react';
import CommentForm from "../comments/CommentForm";
import { Authcontext } from "../../context/Authcontext";
import { useQuery } from "@tanstack/react-query";
import { getpostlikes } from "../../servises/posts.api";

export default function PostCard({ post, isDetails }) {
    const [liked, setLiked] = useState(false);
    const { userId } = useContext(Authcontext)
    const currentUser = useParams();

    const { data: likesData } = useQuery({
        queryKey: ["post-likes", post._id],
        queryFn: () => getpostlikes(post._id),
        enabled: !!post._id
    });

    const likes = likesData?.data?.data || [];

    return (
        <div className="w-full max-w-lg mx-auto bg-white rounded-3xl shadow-lg shadow-black/10 overflow-hidden hover:shadow-xl transition-all duration-300">

            {/* Header */}
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                    <img
                        src={post.user.photo}
                        alt={post.user.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <Link to={`/profile/${post.user._id}`} > <h4 className="font-semibold text-sm">{post.user.name}</h4></Link>
                        <span className="text-xs text-gray-500">{timeAgo(post.createdAt)}</span>
                    </div>
                </div>
                {userId === currentUser.userId &&
                    <Dropdown placement="bottom">
                        <DropdownTrigger>
                            <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="settings" >Delete Comment</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>}
            </div>

            {/* Content */}
            <div className="px-4 pb-4">
                <p className="text-sm text-left">
                    {post.body}
                </p>
            </div>

            {/* Image */}
            {post.image && <div className="w-full">
                <img
                    src={post.image}
                    alt={post.image}
                    className="w-full object-cover"
                />
            </div>}

            {/* Actions */}
            <div className="flex items-center gap-5 p-4">
                <div className="flex items-center space-x-1">
                    <Heart
                        onClick={() => setLiked(!liked)}
                        className={`w-6 h-6 cursor-pointer transition ${liked
                            ? "text-red-500 fill-red-500 scale-110"
                            : "text-gray-600 hover:text-red-500"
                            }`}
                    />
                    <span className="text-sm font-medium">{likes.length}</span>
                </div>
                <div className="flex space-x-1">
                    <Link to={`/post-deatils/${post._id}`}>
                        <MessageCircle className="w-6 h-6 text-gray-600 cursor-pointer hover:text-black transition" />
                    </Link>
                    {post.commentsCount === 0 ? null : <span className="text-sm font-medium">{post.commentsCount}</span>}
                </div>

                <Send className="w-6 h-6 text-gray-600 cursor-pointer hover:text-black transition" />
            </div>
            {isDetails && post._id && <CommentsList postid={post._id} />}
            <CommentForm postid={post._id} />
        </div>
    );
}