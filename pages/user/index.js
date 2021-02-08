import Link from "next/link";
import styles from "../../styles/User.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  return {
    props: { userdata: data },
  };
};

const index = ({ userdata }) => {
  return (
    <div>
      <h1>User List</h1>
      {userdata.map((userdata) => (
        <Link href={"/user/" + userdata.id} key={userdata.id}>
          <a className={styles.single}>
            <h3>{userdata.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default index;
