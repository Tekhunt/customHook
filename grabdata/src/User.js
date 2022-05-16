import { useEffect, useState } from "react";
import useFetch from "./Copied";
const User = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
//   const url = "https://random-data-api.com/api/users/random_user";

  const { loading: userLoading, data: userData, error } = useFetch(url, null);

  return (
    <div style={{ margin: 40 }}>
      <h1>User Component</h1>
      {userLoading && <p>Loading user....</p>}
      {userData && (
        userData.map((user) => (
            <div className="user" key={user.id} style={{paddingBottom: 15}}>{user.title}</div>
          ))
      )}
      {error && <p>Opps something went wrong</p>}
    </div>
  );
};

export default User;