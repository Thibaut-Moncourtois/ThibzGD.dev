import Avatar1 from '../../assets/avatar-1.png';

function Avatar() {
  return (
    <div className="avatar flex justify-center relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
      <img src={Avatar1} alt="avatar" />
    </div>
  );
}

export default Avatar;
