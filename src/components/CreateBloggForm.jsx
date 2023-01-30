import { useState } from "react";

const CreateBloggForm = (props) => {
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <>
      <div>
        <h1 className="font-bold text-2xl">Blogg Details Form</h1>
        <br />
        <div className="text-xl ">
          <label className=" font-bold">Title</label>
          <br />
          <input
            className="mb-4 p-2 w-full border border-gray-500 rounded-md"
            placeholder="Enter a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />

          <label className="  font-bold">Intro</label>
          <br />
          <textarea
            className="mb-4  p-2 w-full border border-gray-500 rounded-md"
            placeholder="Enter Intro"
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
          />
          <br />

          <label className=" font-bold">Content</label>
          <br />
          <textarea
            className="mb-4  p-2 w-full border border-gray-500 rounded-md"
            placeholder="Enter the Decription"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <br />

          <label className=" font-bold">ImageUrl</label>
          <br />
          <input
            className="mb-4  p-2 w-full border border-gray-500 rounded-md"
            placeholder="Paste the imageURL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <br />

          <div className="mt-4 float-right">
            <button 
            onClick={ props.onCloseForm }
            className=" p-2 text-gray border border-gray-400 rounded-xl hover:bg-gray-200">
              Cancel
            </button>

            <button
              onClick = {() => {
                props.setBloggs(prev => [{date:new Date(),title, description:content, intro, imageUrl}, ...prev])
                props.onCloseForm()
              }}
              className=" ml-2 p-2 text-white bg-green-700 border-black rounded-xl hover:bg-green-500 "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateBloggForm;
