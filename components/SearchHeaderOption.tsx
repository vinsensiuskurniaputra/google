import { useRouter } from "next/router";

const SearchHeaderOption = ({ title, Icon, active }) => {
  const router = useRouter();
  const selectTab = (title) => {
    router.push(
      `/search?term=${router.query.term}&searchType=${
        title === "Images" ? "image" : ""
      }`
    );
  };

  return (
    <div
      onClick={()=>selectTab(title)}
      className={`border-b-4 ${
        active ? "border-blue-500 text-blue-500" : "border-transparent"
      } cursor-pointer flex items-center space-x-1 hover:text-blue-500 hover:border-blue-500 pb-2`}
    >
      <Icon className={`h-4 `} />
      <p>{title}</p>
    </div>
  );
};

export default SearchHeaderOption;
