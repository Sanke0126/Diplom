import FillStar from "../icons/FillStarIcon";
import EmptyStarIcon from "../icons/EmptyStarIcon";

const Stars = ({ num }) => {
  const filledStars = [];
  const emptyStars = [];
  for (let i = 0; i < num; i++) {
    filledStars.push(<FillStar key={i} size="1.5rem" />);
  }

  for (let i = 0; i < 5 - num; i++) {
    emptyStars.push(<EmptyStarIcon key={i} size="1.5rem" />);
  }

  return (
    <div className="flex gap-2 text-yellow">
      <>{filledStars}</>
      <>{emptyStars}</>
    </div>
  );
};

export default Stars;
