import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { parseMd } from '../../lib/parse-md';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import {GetStaticProps, NextPage} from 'next';

export const  Post: NextPage<{post:{content: string}}> = ({ post }) => {
    const router = useRouter();
    if (!router.isFallback) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <div>
            <div>
                {router.isFallback ? (
                    <div>Loading…</div>
                ) : (
                    <>
                        <article>
                            <div>{post.content}</div>
                        </article>
                    </>
                )}
            </div>
        </div>
    );
}

export default Post

export const getStaticProps: GetStaticProps = async ({
    params,
    preview = false,
}) => {
    const data = await getPostAndMorePosts(params?.slug as string, preview);
    const content = await parseMd(
        data?.articles?.data[0].attributes?.content || '',
    );

    return {
        props: {
            preview,
            post: {
                content,
            },
        },
    };
};

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug();

    return {
        paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
        fallback: true,
    };
}
