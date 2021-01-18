import Link from 'next/link';

const Index = () => (

    <div>
        <h1>SSR magician</h1>
        <Link href='/about'>
            <button>About</button>
        </Link>
        <Link href='/robots'>
            <button>Robots</button>
        </Link>
    </div> 
);

export default Index;