import image from "../../assets/image/user.webp"
const Avatar = ({ size }: { size: number }) => {
  return (
    <div>
      <img
        className={`rounded-full`}
        style={{ width: size, height: size }}
        src={image}
        alt="User Avatar"
      />
    </div>
  );
};

export default Avatar;

