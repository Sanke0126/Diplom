import PhoneCallIcon from "../icons/PhoneIcon";

const CallUs = ({ phoneNumber }) => {
  return (
    <div className="flex items-center gap-3 mb-[8px]">
      <PhoneCallIcon
        size="2.5rem"
        className="h-full bg-yellow aspect-square rounded-full p-2 shadow-xl"
      />
      <div>
        <h6 className="text-xs">Холбоо барих</h6>
        <h6>{phoneNumber}</h6>
      </div>
    </div>
  );
};

export default CallUs;
