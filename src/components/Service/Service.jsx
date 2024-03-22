import axios from "axios";
import ServicesCards from "./ServicesCards";
import { useQuery } from "@tanstack/react-query";

const Service = () => {
  const { data: services = [], refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get(
        `https://travel-server-side.vercel.app/services`
      );
      return res.data;
    },
  });

  return (
    <div className="px-5">
      <h1 className="text-3xl text-indigo-400 text-center mt-7 mb-4 font-bold">
        {" "}
        Our All Service{" "}
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((travel) => (
          <ServicesCards key={travel._id} travel={travel}></ServicesCards>
        ))}
      </div>
    </div>
  );
};

export default Service;
