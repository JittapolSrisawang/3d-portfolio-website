import MyBook from "./components/Mybook";
import BG from "./assets/bg.jpg";

const BGStyle = {
  backgroundImage: `url(${BG})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%"
};

const App = () => {
  return (
    <div
      style={BGStyle}
      className="w-full h-full flex justify-center items-center bg-red-500"
    >
      <MyBook />
    </div>
  );
};
export default App;
