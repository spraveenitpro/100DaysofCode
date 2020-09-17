import React from "react";
import { useHarperDB } from "use-harperdb";
import "./Reviews.css";
import StarRatings from "./StarRatings";

function Reviews() {
  let [data, loading, error, refresh] = useHarperDB({
    query: {
      operation: "sql",
      sql: `select * from reviews.books`,
    },
    interval: 10000,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data && data.length > 0) {
    return (
      <>
        <table>
          <thead>
            <tr>
              <td>Book</td>
              <td>Author</td>
              <td>Rating</td>
            </tr>
          </thead>
          <tbody>
            {data.map((b, index) => {
              return (
                <tr key={index}>
                  <td>{b.name}</td>
                  <td>{b.author}</td>
                  <td>
                    <StarRatings rating={b.review} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={refresh}>Refresh!</button>
      </>
    );
  } else {
    return <div>{data}</div>;
  }

  //console.log(data);
}
export default Reviews;
