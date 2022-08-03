import * as React from "react";
import { useState } from "react";

interface RandomUserComponentPropsInterface {}

const RandomUserComponent: React.FC<RandomUserComponentPropsInterface> = () => {
  const [userData, setUserData] = useState<any>(null);
  const [savedUsers, setSavedUsers] = useState<any[]>([]);

  const getUserData = () => {
    fetch("https://randomuser.me/api")
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        setUserData(body);
        setSavedUsers((savedUsers) => savedUsers.concat(body.results[0]));
      });
  };

  return (
    <div className="w-5/12 mx-auto pt-10 pb-10">
      <div className="border-2 my-5 p-5 ">
        <button
          className="px-5 py-2 bg-cyan-600 rounded "
          onClick={getUserData}
        >
          Получить рандомного юзера
        </button>
        {userData && (
          <pre className="h-96 overflow-y-auto overflow-x-hidden mt-5">
            {JSON.stringify(userData, null, 2)}
          </pre>
        )}
        {savedUsers.length > 0 && (
          <div className="mt-5 flex flex-wrap">
            {savedUsers.map((user, i) => {
              return (
                <div key={user.login.uuid} className="w-1/5">
                  <div className="text-center">{user.name.first}</div>
                  <div>
                    <img
                      className="mx-auto"
                      src={user.picture.large}
                      alt={`user-${i + 1}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export { RandomUserComponent };
