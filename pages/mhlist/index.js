import Link from 'next/link';
import styles from '../../styles/mhlist.module.css';



export const getStaticProps = async () =>{

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();


    return {
        props: { mhlist: data }
    }
}


const MhList = ({ mhlist }) => {
    return (
        <div className={styles.container}>
            <h1>All MhList</h1>
            {mhlist.map(mh => (
                <Link href={'mhlist/' + mh.id} key={mh.id}>
                    <a className={styles.single}>
                        <h3>{mh.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}
 
export default MhList;