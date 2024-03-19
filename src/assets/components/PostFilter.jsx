import React from "react";
import Select from "./UI/Select";
import Input from "./UI/Input";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        placeholder="Поиск"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка по"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
