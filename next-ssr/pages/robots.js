import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = (props) => {
    return (
        <div>
            <h1>Robots </h1>
            <Link href='/'>
                <button>Home</button>
            </Link>
            <div>
                {
                    props.robots.map(robot => {
                        return (
                            <li key={robot.id}>
                                <Link href={`robots/${robot.id}`}>
                                    {robot.name}
                                </Link>
                            </li>
                        );
                    })

                }   
            </div>
        </div>
    );
}

/* Using isomorphic-unfetch - Next < 9.3

Robots.getInitialProps = async function(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        robots: data
    }
}

*/

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { robots: data } }
  }

export default Robots;
