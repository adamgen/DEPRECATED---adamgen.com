import { NextPage } from 'next';
import { getAllPostsForHome } from '../lib/api';

const Blog: NextPage = (props) => {
    return (
        <div>
            <pre>{JSON.stringify(props, null, 4)}</pre>
        </div>
    );
};

export default Blog;

export async function getStaticProps({ preview = false }) {
    const posts = (await getAllPostsForHome(preview)) || [];

    return {
        props: { posts, preview },
    };
}
