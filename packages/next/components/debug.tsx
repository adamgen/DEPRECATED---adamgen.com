import classNames from 'classnames';

export const Debug: React.FC = ({ children }) => (
    <pre className={classNames('max-w-100')}>
        {JSON.stringify(children, null, 4)}
    </pre>
);
