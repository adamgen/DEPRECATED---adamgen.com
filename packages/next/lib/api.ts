import { DocumentNode } from 'graphql';
import QUERY from './query.gql';
import { Posts, PostsVariables } from './__generated__/Posts';
import { PublicationState } from '../__generated__/globalTypes';

export async function fetchAPI<Response, Variables = undefined>(
    query: DocumentNode,
    { variables }: { variables?: Variables } = {},
): Promise<null | Response> {
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
    return fetchAPI<Posts, PostsVariables>(QUERY, {
        variables: {
            publicationState: preview
                ? PublicationState.PREVIEW
                : PublicationState.LIVE,
        },
    });
}
