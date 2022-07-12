const Image = ({ author, url }) => {
  return (
    <div>
      <h2>{author}</h2>
      <img src={url} alt="Random grab from LP" />
    </div>
  );
};

export default Image;
