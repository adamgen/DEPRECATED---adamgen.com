import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/api';
import Head from 'next/head';
import { parseMd } from '../../lib/parse-md';

export default function Post({ post, morePosts, preview }) {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
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
                            <Head>
                                <title></title>
                                <meta
                                    property="og:image"
                                    content={post.ogImage.url}
                                />
                            </Head>
                            <div>
                                {post.title}
                            </div>
                            <div>{post.content}</div>
                        </article>
                    </>
                )}
            </div>
        </div>
    );
}

export async function getStaticProps({ params, preview = null }) {
    const data = await getPostAndMorePosts(params.slug, preview);
    const content = await parseMd(data?.posts[0]?.content || '');

    return {
        props: {
            preview,
            post: {
                ...data?.posts[0],
                content,
            },
            morePosts: data?.morePosts,
        },
    };
}

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug();
    return {
        paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
        fallback: true,
    };
}
