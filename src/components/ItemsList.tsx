import { Items, RaectSetState } from "../types/utils";
import Button from "./Button";

type ItemsList = {
  items: Items[];
  setItems: RaectSetState<Items[]>;
};

const ItemsList = ({ items, setItems }: ItemsList) => {
  const handleDelete = (value: string) => {
    setItems((prev) => prev.filter((data) => data.id !== value));
  };
  return items.map((data) => (
    <div
      key={data.id}
      className=" flex justify-between items-center border border-slate-600 pl-2 mb-2"
    >
      <p>{data.title}</p>
      <Button onClick={() => handleDelete(data.id)}>
        <img
          width={24}
          height={24}
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/delete-58-104010.png?f=webp&w=512"
          alt=""
        />
      </Button>
    </div>
  ));
};

export default ItemsList;
