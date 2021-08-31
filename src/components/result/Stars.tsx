import { Star } from "../Icons";

import './Stars.scss';

const Stars = ({
  total,
  correctAnswers,
}: {
  total: number;
  correctAnswers: number;
}) => {
  return (
    <div className="stars">
      {Array.from(Array(total).keys()).map((item, index) => {
        let fill = "#969CDC";
        if (index + 1 <= correctAnswers) fill = "#FF7C7C";
        return <Star fill={fill} key={item} customClass="stars__icon"/>;
      })}
    </div>
  );
};

export default Stars;
