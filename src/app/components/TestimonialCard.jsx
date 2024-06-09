import { Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="flex flex-col gap-10 lg:min-h-96">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div>
            <Star className="fill-yellow-500 stroke-yellow-500" />
          </div>
        ))}
      </div>
      <p className="max-w-lg lg:text-2xl">{testimonial.message}</p>
      <p>~ {testimonial.user}</p>
    </article>
  );
};

export default TestimonialCard;
