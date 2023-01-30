const BloggCard = (props) => {

  return (
    <div>
      <p className="text-xs text-gray-400">{props.date.toString()}</p>
      <h2 className="text-lg text-black font-bold">{props.title}</h2>
      <p className="text-sm text-gray-500">
        {props.intro}
      </p>
      <button onClick={props.showBloggDetails} 
      className="text-blue-500 font-bold mt-2 hover:text-blue-800">Read More</button>
    </div>
  );
};

export default BloggCard;
