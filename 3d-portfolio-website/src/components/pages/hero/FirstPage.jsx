import personImg from "../../../assets/PHOTO.jpg";
import "boxicons";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow">
        <div>
          <img
            src={personImg}
            alt=""
            className="w-[300px] mx-auto rounded-full py-10"
          />
        </div>
        <div>
          <p className="text-3xl md:text-5xl font-bold text-black/80 text-center">
            Jittapol Srisawang
          </p>
          <p className="text-center text-xl text-primary font-bold">
            Full Stack Developer
          </p>
          <div className="flex justify-center">
            <a className="mx-2" href="https://github.com/JittapolSrisawang">
              <box-icon type="logo" name="github"></box-icon>
            </a>
            <a className="mx-2" href="https://www.linkedin.com/in/jittapol-srisawang-86b7272a9/">
              <box-icon name="linkedin-square" type="logo"></box-icon>
            </a>
          </div>
          <p className="mx-10">
            I have a variety of work experiences such as entrepreneurs,
            freelancers, government employees. So I understand the behavior and
            needs of various customers. I'm currently passionate about web
            application development and I'm very committed to learning and
            working hard to improve myself every day.
          </p>
        </div>
      </main>
    </div>
  );
};
export default FirstPage;
