import { IoEllipseSharp } from "react-icons/io5";
import { Startup } from "@/generated/service/startups/startups";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
  experience: string;
}

const TeamMemberCard = ({
  image,
  name,
  role,
  experience,
}: TeamMemberCardProps) => {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="relative w-[50%] aspect-[16/10] rounded-lg overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={`${name} - ${role}`}
          fill
          className='object-cover transition-opacity duration-300 
            sizes="(max-width: 768px) 100vw, 50vw'
        />
      </div>
      <div className="w-[50%] space-y-3">
        <div className="flex items-center gap-2">
          <h2 className="font-medium text-lg">{name}</h2>
          <IoEllipseSharp className="w-2 h-2 text-gray-400" />
          <span className="text-gray-600">{role}</span>
        </div>
        <p className="text-gray-700 line-clamp-3">{experience}</p>
        <div className="relative inline-block group">
          <a
            href="#"
            className="text-[#0F8B3A] font-medium hover:text-[#0c7230] transition-colors"
          >
            Read more
            <div className="h-[1px] bg-[#0F8B3A] w-0 group-hover:w-full transition-all duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

const TeamMember = ({ team }: { team: Startup | undefined }) => {
  if (!team) {
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-8">
          <Skeleton className="h-8 w-40" />z
          <Skeleton className="h-[1px] w-[200px]" />
        </div>
        <div className="space-y-6">
          {[1, 2].map((index) => (
            <div key={index} className="flex items-center gap-6">
              <Skeleton className="w-[50%] aspect-[16/10] rounded-lg" />
              <div className="w-[50%] space-y-3">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-8">
          <h2 className="text-2xl font-bold whitespace-nowrap">Team Members</h2>
          <div className="bg-[#000] h-[1px] w-[200px]" />
        </div>
      </div>

      <div className="space-y-8">
        <TeamMemberCard
          image={team.founder.profileImage}
          name={`${team.founder.founderFirstname} ${team.founder.founderLastname}`}
          role="Founder"
          experience={team.founder.founderExperience}
        />

        {team.teamInformation && (
          <TeamMemberCard
            image={team.founder.profileImage} //
            name={`${team.teamInformation.team_cofounder_firstName} ${team.teamInformation.team_cofounder_lastName}`}
            role="Co-Founder"
            experience={team.teamInformation.team_cofounder_experience}
          />
        )}
      </div>
    </div>
  );
};

export default TeamMember;
