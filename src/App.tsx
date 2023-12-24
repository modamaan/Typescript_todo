import ImageHeader from "./components/ImageHeader";
import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import { type Items } from "./types/utils";
import ItemsList from "./components/ItemsList";

function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (trimmedValue !== "") {
      // Add the trimmedValue to the items array
      setItems((prev) => [
        ...prev,
        { title: trimmedValue, id: Date.now().toString() },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <ImageHeader />
      <div className="w-[350px]">
        <form className="mt-5" onSubmit={handleSubmit}>
          <Input
            type="text"
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <Button className="bg-gray-700 w-full rounded-sm">Add</Button>
        </form>
        <div className=" h-52 overflow-y-auto mt-5">
          <ItemsList items={items} setItems={setItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
