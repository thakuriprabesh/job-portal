import { Link } from "react-router-dom";
import { JobCard } from "../global/JobCard";
import { ArrowRight } from "lucide-react";

export function LandingJobSection() {
  const jobTypes = {
    "full-time": "bg-blue-100 text-blue-800",
    "part-time": "bg-green-100 text-green-800",
    remote: "bg-purple-100 text-purple-800",
    "on-site": "bg-orange-100 text-orange-800",
  };
  const featuredJobs = [
    {
      id: 2,
      title: "UX Designer",
      company: "DesignHub",
      location: "Dharan",
      salary: "Rs .90,000 - Rs .120,000",
      type: "full-time",
      workLocation: "on-site",
      postedDate: "2023-07-14",
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "AI Innovations",
      location: "Itahari",
      salary: "Rs .100,000 - Rs .130,000",
      type: "full-time",
      workLocation: "remote",
      postedDate: "2023-07-13",
    },
    {
      id: 4,
      title: "Product Manager",
      company: "StartUp Co.",
      location: "Biratnagar",
      type: "full-time",
      workLocation: "on-site",
      salary: "Rs .100,000 - Rs .130,000",
      postedDate: "2023-07-12",
    },
  ];
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Featured Job Opportunities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {featuredJobs.map((job) => (
            <JobCard job={job} jobTypes={jobTypes} key={job.id} />
          ))}
        </div>
        <Link
          to={"/jobs"}
          className=" flex justify-center items-center gap-2 mt-6 text-xl font-bold text-primary underline"
        >
          <span>View All Jobs</span>
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
