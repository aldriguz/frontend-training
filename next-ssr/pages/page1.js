import Link from 'next/link';

const Page1 = () => (

    <div>
        <h1>This is the page 1</h1>
        <Link href='/page2'>
            <a>Go to page 2</a>
        </Link>
        {/*<a href='/page1'></a>*/}
    </div> 
);

export default Page1;