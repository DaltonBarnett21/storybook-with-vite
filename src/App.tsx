import React, { useState, useEffect } from "react";

const companies = [
  { companyName: "Bobs boats" },
  { companyName: "Johns Hardware" },
];

function App() {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState<any>([]);
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    setList(companies);
  }, [list]);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li: any) => li.companyName));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setIsCheck([...isCheck, name]);
    if (!checked) {
      setIsCheck(isCheck.filter((item: any) => item !== name));
    }
  };

  return (
    <>
      <ul>
        <li>
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={isCheckAll}
            name="selectAll"
            id="selectAll"
          />
          <label>All</label>
        </li>
        {list?.map(({ companyName }: any) => (
          <li key={companyName}>
            <input
              type="checkbox"
              name={companyName}
              id={companyName}
              onChange={handleClick}
              checked={isCheck.includes(companyName)}
            />
            <label>{companyName}</label>
          </li>
        ))}
      </ul>
      <div>
        {isCheck.length === companies.length ? <span>All</span> : isCheck}
      </div>
    </>
  );
}

export default App;
