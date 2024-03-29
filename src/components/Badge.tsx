interface Props {
  text: string;
  color: keyof typeof colors | string;
}

const colors = {
  blue: "bg-blue-700 text-blue-200",
  red: "bg-red-700 text-red-200",
  green: "bg-green-700 text-green-200",
  indigo: "bg-indigo-700 text-indigo-200",
  yellow: "bg-yellow-700 text-yellow-200",
  purple: "bg-purple-700 text-purple-200",
  pink: "bg-pink-700 text-pink-200",
  "gradient-indigo": "bg-gradient-to-r from-blue-600 to-purple-600 text-white ",
  "gradient-pink": "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white",
};

const Badge: React.FC<Props> = ({ text, color }) => (
  <span
    className={`${colors[color]} inline-block max-w-max rounded-full px-2 py-0.5 text-xs font-bold uppercase tracking-normal sm:mt-0`}
  >
    {text}
  </span>
);

export default Badge;
