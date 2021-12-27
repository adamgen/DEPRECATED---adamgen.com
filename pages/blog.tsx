import { NextPage } from 'next';
import Link from 'next/link';
import { getAllPostsForHome } from '../lib/api';
import classNames from 'classnames';
import { Posts } from '../lib/__generated__/Posts';

const Blog: NextPage<{ posts: Posts }> = ({ posts }) => {
    return (
        <div className={classNames('max-w-3xl m-auto px-4 md:px-0')}>
            {posts.articles?.data.map((article) => {
                const excerptMatch =
                    article.attributes?.content.match(/^.{200}.+?\s/gm);
                if (!excerptMatch) {
                    console.error('Bad excerpt', excerptMatch);
                }
                const excerpt = excerptMatch ? excerptMatch[0] : '';

                return (
                    article.attributes && (
                        <div key={article.id}>
                            <Link href={`/posts/${article.attributes.slug}`}>
                                {article.attributes.title}
                            </Link>
                            <div>{excerpt}</div>
                        </div>
                    )
                );
            })}
        </div>
    );
};

export default Blog;

export async function getStaticProps({ preview = false }) {
    const posts = await getAllPostsForHome(preview);

    return {
        props: { posts, preview },
    };
}
