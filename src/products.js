import {useCtx} from './context';

function Products() {
    const ctx = useCtx();
    // Compared to the lecture video, substr is deprecated. We now have to use substring
    // Note that the syntax is slightly different, substr(start, num), but substring(start, end), with end = start+num
    ctx.users.push(Math.random().toString(36).substring(2, 7));

    return (
        <div>
            <h3> Products Component</h3>
            {JSON.stringify(ctx.users)}
        </div>
    );
}

export default Products;