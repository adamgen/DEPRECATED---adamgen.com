import gql from 'graphql-tag';

async function fetchAPI<T>(
    query: string,
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

export async function getPreviewPostBySlug(slug: string) {
    const data = await fetchAPI<{ posts: { slug: string }[] }>(
        `
  query PostBySlug($where: JSON) {
    posts(where: $where) {
      slug
    }
  }
  `,
        {
            variables: {
                where: {
                    slug,
                },
            },
        },
    );
    return data?.posts[0];
}

export async function getAllPostsWithSlug() {
    const data = await fetchAPI<{ posts: { slug: string }[] }>(`
    {
      posts {
        slug
      }
    }
  `);
    return data?.posts;
}

export async function getAllPostsForHome(preview: boolean) {
    const data = await fetchAPI<any>(
        gql`
            query Posts {
                articles {
                    data {
                        attributes {
                            content
                            createdAt
                            description
                            category {
                                data {
                                    id
                                    attributes {
                                        createdAt
                                        name
                                        articles {
                                            data {
                                                attributes {
                                                    title
                                                    slug
                                                }
                                            }
                                        }
                                        createdAt
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
        {
            variables: {
                where: {
                    ...(preview ? {} : { status: 'published' }),
                },
            },
        },
    );
    return data;
}

export async function getPostAndMorePosts(slug: string, preview: boolean) {
    const data = await fetchAPI(
        `
  query PostBySlug($where: JSON, $where_ne: JSON) {
    posts(where: $where) {
      title
      slug
      content
      date
      ogImage: coverImage{
        url
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
    morePosts: posts(sort: "date:desc", limit: 2, where: $where_ne) {
      title
      slug
      excerpt
      date
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
  }
  `,
        {
            preview,
            variables: {
                where: {
                    slug,
                    ...(preview ? {} : { status: 'published' }),
                },
                where_ne: {
                    ...(preview ? {} : { status: 'published' }),
                    slug_ne: slug,
                },
            },
        },
    );
    return data;
}
