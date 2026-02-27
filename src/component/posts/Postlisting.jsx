
import PostCard from './postCard'

import LoaderPharaoh from '../shared/validationMessage/loader/loader';
import { Alert } from '@heroui/react';
import { useQuery } from "@tanstack/react-query"
import { getAllposts } from '../../servises/posts.api';
import { getprofilepost } from '../../servises/profile';
import { Authcontext } from '../../context/Authcontext';
import { useParams } from 'react-router';


export default function Postlisting({ isHome = true }) {
    const { userId } = useParams();

    const { data, error, isError, isLoading } = useQuery({
        queryKey: isHome ? ["all-posts"] : ["user-posts", userId],
        queryFn:  isHome ? getAllposts : () => getprofilepost(userId),
        enabled: isHome || !!userId,
        staleTime: 0
    });

    const posts = data?.data?.data?.posts || [];
    if (isLoading) {
        return <LoaderPharaoh />;
    }
    if (isError) {
        return <Alert color={"danger"} title={error.response?.data?.error || error.response?.data?.message || error.message} />;
    }


    const finalPosts = posts || [];

    return (
        <section className='py-12'>
            <div className='w-full max-w-100 md:max-w-1/2 mx-auto space-y-4'>
                {finalPosts.length === 0 ? (
                    <p className="text-center text-yellow-200">no posts yet</p>
                ) : (
                    finalPosts.map(post => <PostCard key={post._id} post={post} />)
                )}
            </div>
        </section>
    );
}