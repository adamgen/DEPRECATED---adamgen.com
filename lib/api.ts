import { DocumentNode } from 'graphql';
import QUERY from './query.gql';
import { Posts } from './__generated__/Posts';

async function fetchAPI<T>(
    query: DocumentNode,
    { variables }: { variables?: any; preview?: boolean } = {},
): Promise<null | T> {
    const res = await fetch(`http://strapi.adamgen.com/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }

    return json.data;
}

// export async function getPreviewPostBySlug(slug: string) {
//     const data = await fetchAPI<{ posts: { slug: string }[] }>(
//         gql`
//             query ArticlesBySlug($filters: ArticleFiltersInput) {
//                 articles(filters: $filters) {
//                     data {
//                         attributes {
//                             title
//                             slug
//                         }
//                     }
//                 }
//             }
//         `,
//         {
//             variables: {
//                 // filter:
//             },
//         },
//     );
//     return data?.posts[0];
// }
//
// export async function getAllPostsWithSlug() {
//     const data = await fetchAPI<{ posts: { slug: string }[] }>(gql``);
//     return data?.posts;
// }

export async function getAllPostsForHome(preview: boolean) {
    const data = await fetchAPI<Posts>(QUERY, {
        variables: {
            where: {
                ...(preview ? {} : { status: 'published' }),
            },
        },
    });
    return data;
}

// export async function getPostAndMorePosts(slug: string, preview: boolean) {
//     const data = await fetchAPI(
//         gql`
//             query PostBySlug {
//                 article {
//                     data {
//                         attributes {
//                             title
//                         }
//                     }
//                 }
//             }
//         `,
//         {
//             preview,
//             variables: {
//                 where: {
//                     slug,
//                     ...(preview ? {} : { status: 'published' }),
//                 },
//                 where_ne: {
//                     ...(preview ? {} : { status: 'published' }),
//                     slug_ne: slug,
//                 },
//             },
//         },
//     );
//     return data;
// }
