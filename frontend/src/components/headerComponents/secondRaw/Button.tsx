

const Button = ({ text }: { text: string }) => {
  return (
    <div><button type="button" className="text-white bg-sky-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-extrabold rounded-full text-xl px-1 py-2 text-center  lg:w-[8rem] ">{text}</button></div>
  )
}

export default Button
