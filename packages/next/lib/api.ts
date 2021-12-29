import { DocumentNode } from 'graphql';
import QUERY from './query.gql';
import { Posts } from './__generated__/Posts';

export async function fetchAPI<T>(
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

export function getAllPostsForHome(preview: boolean) {
    return fetchAPI<Posts>(QUERY, {
        variables: {
            where: {
                ...(preview ? {} : { status: 'published' }),
            },
        },
    });
}

export async function getPostAndMorePosts(slug: string, preview: boolean) {
    const data = await fetchAPI<Posts>(QUERY, {
        preview,
        variables: {
            slug: 'the-future-of-blogs',
        },
    });
    return data;
}
