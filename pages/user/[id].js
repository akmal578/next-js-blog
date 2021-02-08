export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((usrdata) => {
    return {
      params: { id: usrdata.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { usrdata: data },
  };
};

const Details = ({ usrdata }) => {
  return (
    <div>
      <h1>{usrdata.name}</h1>
      <p>{usrdata.email}</p>
      <p>{usrdata.website}</p>
      <p>{usrdata.address.city}</p>
    </div>
  );
};

export default Details;
