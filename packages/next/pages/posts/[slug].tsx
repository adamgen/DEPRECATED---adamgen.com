import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { parseMd } from '../../lib/parse-md';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import { GetStaticProps } from 'next';

export default function Post({ post }) {
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
                            <div>{post.title}</div>
                            <div>{post.content}</div>
                        </article>
                    </>
                )}
            </div>
        </div>
    );
}

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
