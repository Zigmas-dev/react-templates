import { createContext, useState } from "react";

export const BulletinContext = createContext();

export const BulletinProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Vandens tiekimas", text: "Nuo balandžio 15d. vanduo vėl tiekiamas." },
    { id: 2, title: "Talkos diena", text: "Balandžio 20d. kviečiame visus į talką 10:00." }
  ]);

  const addPost = (newPost) => {
    setPosts((prev) => [...prev, { id: Date.now(), ...newPost }]);
  };

  return (
    <BulletinContext.Provider value={{ posts, addPost }}>
      {children}
    </BulletinContext.Provider>
  );
};
