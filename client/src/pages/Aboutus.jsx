import { Story, MissionVision, Stat, Team } from "../components/index";

export function Aboutus() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <h1 className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Connecting Talent with Opportunity
          </h1>
          <p className="text-xl mb-8">
            Empowering careers and businesses through innovative job matching
          </p>
        </div>
      </h1>
      <Story />
      <MissionVision />
      <Stat />
      <Team />
    </div>
  );
}
