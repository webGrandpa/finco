import Image from "next/image"

const TeamCard = ({
    teamImage,
    teamName,
    teamRole,
    teamExperience,
    teamDescription,
    teamContact
}) => {
    return (
        <div className="flex flex-col gap-6 bg-white rounded-lg shadow-md h-full text-center">
            
            <div className="flex flex-col gap-4 pt-2 items-center bg-[#E6F3FF] w-full p-1 h-[160px] rounded-t-lg flex-shrink-0">
                <Image
                    src={teamImage || '/placeholder-avatar.png'}
                    alt={teamName}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-cover rounded-full"
                />
                <h2 className="text-lg font-semibold">{teamName}</h2>
            </div>

            <div className="flex flex-col flex-grow gap-3 px-6 pb-6">
                <h4 className="text-md text-gray-600">{teamRole}</h4>
                <h3 className="text-md underline text-gray-500">{teamExperience}</h3>
                <p className="text-sm text-gray-500 flex-grow min-h-[80px] line-clamp-5">
                    {teamDescription}
                </p>

                <span className="mt-auto pt-2 font-medium text-gray-700">{teamContact}</span>
            </div>
        </div>
    )
}

export default TeamCard;