import React from "react";
// import { useState } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  //   const [param, setParam] = useState({
  //     name: "",
  //     personId: "",
  //   });
  //   const [users, setUsers] = useState([])
  //   const [list, setList] = useState([])

  //   users是请求来的数据，那么什么时候需要去请求数据呢？当param变化时就需要使用，这块用useEffect来处理
  //   useEffect(()=>{
  //     fetch('').then( async res=>{
  //         // 使用list来装请求到的数据
  //         if(res.ok) {
  //             setList(await res.json())
  //         }
  //     })
  //   }, [param])
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        <select
          value={param.personId}
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          <option value={""}>负责人</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
