import Avatar1 from '../../assets/avatar-1.png';

function Avatar() {
  return (
    <div className="avatar flex justify-center relative bg-gradient-to-b from-teal-500">
      <img src={Avatar1} alt="avatar" />
    </div>
  );
}

export default Avatar;
