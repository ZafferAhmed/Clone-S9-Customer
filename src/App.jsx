import Body from "./Body";
import Header from "./Header";

const App = () => {
  return (
    <section className="w-full h-full flex flex-col gap-10">
      <div className="w-full h-96">
        <Header />
      </div>
      <div className="w-full h-auto flex-grow overflow-y-auto">
        <Body />
      </div>
    </section>
  );
};

export default App;
