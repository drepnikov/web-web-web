import * as React from "react";
import { useEffect, useState } from "react";

interface SandboxComponentPropsInterface {}

const fetchUsers = (): Promise<{ id: number; name: string }[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 123, name: "Dima" },
        { id: 456, name: "Vasya" },
      ]);
    }, 3000);
  });

const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{ id: number; name: string }[]>();

  useEffect(() => {
    setLoading(true);

    fetchUsers().then((res) => {
      console.log("готово");
      setLoading(false);
      setData(res);
    });
  }, []);

  return { loading, data };
};

const SandboxComponent: React.FC<SandboxComponentPropsInterface> = () => {
  const { loading, data } = useUsers();

  if (loading) return <div>Загружаю...</div>;

  return (
    <ul>
      {data?.map((user) => {
        return (
          <li>
            <h3>{user.name}</h3>
          </li>
        );
      })}
    </ul>
  );
};

export { SandboxComponent };
