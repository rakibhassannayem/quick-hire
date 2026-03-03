import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ['latin'],
});

const Title = ({ children, className }) => {
  return (
    <div className={`text-4xl font-bold mb-6 ${className} ${saira.className}`}>
      {children}
    </div>
  );
};

export default Title;