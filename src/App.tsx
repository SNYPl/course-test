import "./App.css";
import Navigation from "./components/nav/Nav";
import Courses from "./components/courses/Courses";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocation } from "react-router";
import { navItems } from "./lib/navData";
import { ColorRing } from "react-loader-spinner";

function App() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tag = queryParams.get("tag");

  const activeItem = navItems.find((el) => el.href.includes(tag || ""));

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllCourses"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://logiclike.com/docs/courses.json"
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching courses", error);
        throw new Error("Error fetching courses");
      }
    },
  });

  const filteredData = data?.filter((el: any) => {
    if (activeItem?.title === "Все темы") {
      return el;
    }

    return el.tags.includes(activeItem?.tags);
  });

  return (
    <div className="App">
      <Navigation activeItem={activeItem} />
      {isLoading ? <ColorRing /> : <Courses data={filteredData} />}
    </div>
  );
}

export default App;
