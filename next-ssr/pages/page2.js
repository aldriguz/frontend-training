import Link from 'next/link';

const Page2 = () => (
    <div>
        <h1>This is the page 2</h1>
        <Link href='/page1'>
            <a>Go to page 1</a>
        </Link>
    </div> 
);

export default Page2;