import { useGetAllPuppiesQuery } from "../../api/puppyBowlApi";

/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */
export default function PuppyList() {
  // TODO: Get data from getPuppies query
  const { data = {}, isLoading, error } = useGetAllPuppiesQuery();
  if (isLoading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error: {error.message}</p>;
  }
  console.log(data.data.players.map);
  return (
    <article>
      <h2>Roster</h2>
      <ul className="puppies">
        {/* {isLoading && <li>Loading puppies...</li>} */}
        {data &&
          data.data.players.map((p) => (
            <li key={p.id}>
              <h3>
                {p.name} #{p.id}
              </h3>
              <p>{p.breed}</p>
              <p>{p.status}</p>
              <figure>
                <img src={p.imageUrl} alt={p.name} />
              </figure>
            </li>
          ))}
      </ul>
    </article>
  );
}
