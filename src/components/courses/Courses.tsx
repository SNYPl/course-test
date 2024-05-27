import style from "./style.module.scss";
import Course from "./course/Course";

type courseItem = {
  bgColor: string;
  id: string;
  image: string;
  name: string;
  tags: string[];
};

const Courses = ({ data }: { data: courseItem[] }) => {
  return (
    <section className={style.courses}>
      {data?.map((el) => {
        return <Course key={el.id} {...el} />;
      })}
    </section>
  );
};

export default Courses;
