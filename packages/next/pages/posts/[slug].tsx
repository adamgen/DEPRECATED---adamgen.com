import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { parseMd } from '../../lib/parse-md';
import { fetchAPI, getPostAndMorePosts } from '../../lib/api';
import { GetStaticProps, NextPage } from 'next';
import classNames from 'classnames';
import styled from 'styled-components';
import { Posts } from '../../lib/__generated__/Posts';
import QUERY from '../../lib/query.gql';

export const Post: NextPage<{ post: { content: string } }> = ({ post }) => {
    const router = useRouter();
    if (!router.isFallback && !post.content) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <div>
            {router.isFallback ? (
                <div>Loading…</div>
            ) : (
                <Content
                    className={classNames('max-w-3xl m-auto px-4 md:px-0')}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            )}
        </div>
    );
};

export default Post;

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
    const response = await fetchAPI<Posts>(QUERY, {});
    const paths =
        response?.articles?.data.map(
            (post) => `/posts/${post.attributes?.slug}`,
        ) || [];

    return {
        paths,
        fallback: false,
    };
}

const Content = styled.div`
    p {
        margin-bottom: 1rem;
        padding-left: 1rem;
    }
`;
