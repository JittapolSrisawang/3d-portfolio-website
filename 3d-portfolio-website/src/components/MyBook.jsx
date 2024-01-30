import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./pages/cover/cover";
import FirstPage from "./pages/hero/FirstPage";
import coverImg from  "../assets/cover.jpg";

// eslint-disable-next-line no-unused-vars
function MyBook(props) {
  return (
    <HTMLFlipBook width={600} height={700} showCover="true">
      <Page number={1}>
        <Cover coverImg={coverImg} title="My Portfolio" />
      </Page>
      <Page number={2}>
        <FirstPage />
      </Page>
      <Page number={3}>
        <div className="demoPage text-white text-3xl">Page 3</div>
      </Page>
    </HTMLFlipBook>
  );
}

export default MyBook;
