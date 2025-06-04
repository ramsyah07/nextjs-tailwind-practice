// components/Card.jsx
export default function Button({ children, variant ='primary'}){
  const base=" px-4 py-2 rounded font-medium tarnsition";
  const variants ={
    primary: "bg-blue-500 text-white hover:bg-blue-700",
     secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return <button className={`${base} ${variants[variant]}`}>{children}</button>;
}
  