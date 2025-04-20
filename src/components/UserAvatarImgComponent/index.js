const UserAvatarImgComponent = ({ img, lg }) => {
  return (
    <>
      <div className={`userImg ${lg === true && "lg"}`}>
        <span className="rounded-circle">
          <img src={img} alt="user" />
        </span>
      </div>
    </>
  );
};

export default UserAvatarImgComponent;
