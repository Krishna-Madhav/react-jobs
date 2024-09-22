import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero
        title="React Jobs"
        subtitle="Choose a job which matches your expertise and experience"
      />
      <HomeCards />
      <JobListings isHome="true" />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
