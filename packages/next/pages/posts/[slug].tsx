import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Image from 'next/image';
import { parseMd } from '../../lib/parse-md';
import { fetchAPI } from '../../lib/api';
import { GetStaticProps, NextPage } from 'next';
import classNames from 'classnames';
import styled from 'styled-components';
import { format, formatDistance } from 'date-fns';
import {
    Posts,
    Posts_articles_data_attributes,
    PostsVariables,
} from '../../lib/__generated__/Posts';
import QUERY from '../../lib/query.gql';
import { PublicationState } from '../../__generated__/globalTypes';

export interface ImageFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path?: any;
    size: number;
    width: number;
    height: number;
    provider_metadata: {
        public_id: string;
        resource_type: string;
    };
}

export interface ImageFormats {
    large: ImageFormat;
    medium: ImageFormat;
    small: ImageFormat;
    thumbnail: ImageFormat;
}

export const Post: NextPage<{ post: Posts_articles_data_attributes }> = ({
    post,
}) => {
    const router = useRouter();
    if (!router.isFallback && !post.content) {
        return <ErrorPage statusCode={404} />;
    }

    const imageFormats = post.author?.data?.attributes?.picture?.data
        ?.attributes?.formats as ImageFormats;
    const imageUrl = imageFormats?.thumbnail?.url;
    const timeAgo = formatDistance(new Date(post.createdAt), new Date(), {
        addSuffix: true,
    });
    const publishTime = format(
        new Date(post.createdAt),
        "HH:mm 'on' dd/MM/yyy",
    );
    const authorName = post.author?.data?.attributes?.name;

    return (
        <div className={classNames('max-w-3xl m-auto px-4 md:px-0')}>
            {router.isFallback ? (
                <div>Loading…</div>
            ) : (
                <>
                    <h1 className={classNames('text-2xl mb-4 pl-4 border-l-2')}>
                        {post.title}
                    </h1>
                    <Content
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    <div className={classNames('text-sm flex items-center')}>
                        <div className={classNames('mr-4 flex')}>
                            <Image
                                src={imageUrl}
                                width={'50px'}
                                height={'50px'}
                            />
                        </div>
                        Posted {timeAgo} by {authorName} at {publishTime}
                    </div>
                </>
            )}
        </div>
    );
};

export default Post;

export const getStaticProps: GetStaticProps = async ({
    params,
    preview = false,
}) => {
    const data = await fetchAPI<Posts, PostsVariables>(QUERY, {
        variables: {
            slug: params?.slug as string,
            publicationState: preview
                ? PublicationState.PREVIEW
                : PublicationState.LIVE,
        },
    });
    const content = await parseMd(
        data?.articles?.data[0]?.attributes?.content || '',
    );
    console.log(data);

    return {
        props: {
            preview,
            post: {
                ...data?.articles?.data[0]?.attributes,
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
    pre,
    p,
    ul,
    ol,
    h1,
    h2,
    h3 {
        margin-bottom: 1rem;
    }

    ul {
        padding-left: 1rem;
        list-style: auto;
    }

    ol {
        padding-left: 1rem;
        list-style: auto;
    }

    li {
        margin-bottom: 0.25rem;
    }

    h1 {
        font-size: x-large;
    }

    h2 {
        font-size: large;
    }

    pre {
        padding: 0.25rem;
        background: lightgray;
        overflow-y: scroll;
    }
`;
