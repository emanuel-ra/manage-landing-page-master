import type { Testimonial as ITestimonial } from "../data/testimonials";
interface Props {
  data: ITestimonial;
}
export const Testimonial = (props: Props) => {
  const { data } = props;
  return (
    <>
      <article className="flex flex-col justify-center items-center gap-y-4 relative w-[540px] px-10">
        <img src={data.photo} alt={data.name} className="size-20" />
        <h4>{data.name}</h4>
        <blockquote>{data.testimonial}</blockquote>
      </article>
    </>
  );
};
