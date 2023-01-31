import { useState } from "react";
import Blogs from "./components/Blogs";
import CreateBloggForm from "./components/CreateBloggForm";
import Modal from "./components/Modal";
import BloggDetail from "./components/BloggDetails";
import Button from "./components/Button";

function App() {
  const [showCreateModel, setShowCreateModel] = useState(false);

  const [bloggIndex, setBloggIndex] = useState(-1);
  
  const [editBloggIndex, setEditBloggIndex ] = useState(-1)

  const [bloggs, setBloggs] = useState([{
    date: new Date(),
    title:'Content 1',
    intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus laboriosam consectetur autem quia et porro beatae molestias quasi. Sit, autem animi culpa quas maxime in alias saepe rerum repudiandae nobis?',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus laboriosam consectetur autem quia et porro beatae molestias quasi. Sit, autem animi culpa quas maxime in alias saepe rerum repudiandae nobis?',
    imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-JzIOQQ55f_0dLZWgDBRc_kpVZx6Jk0AMcS2RyDq&s'
  },{
    date: new Date(),
    title:'Content 2',
    intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus laboriosam consectetur autem quia et porro beatae molestias quasi. Sit, autem animi culpa quas maxime in alias saepe rerum repudiandae nobis?',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus laboriosam consectetur autem quia et porro beatae molestias quasi. Sit, autem animi culpa quas maxime in alias saepe rerum repudiandae nobis?',
    imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-JzIOQQ55f_0dLZWgDBRc_kpVZx6Jk0AMcS2RyDq&s'
  },{
    date: new Date(),
    title:'Content 3',
    intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus laboriosam consectetur autem quia et porro beatae molestias quasi. Sit, autem animi culpa quas maxime in alias saepe rerum repudiandae nobis?',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus laboriosam consectetur autem quia et porro beatae molestias quasi. Sit, autem animi culpa quas maxime in alias saepe rerum repudiandae nobis?',
    imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-JzIOQQ55f_0dLZWgDBRc_kpVZx6Jk0AMcS2RyDq&s'
  },{
    date: new Date(),
    title:'Content 4',
    intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus laboriosam consectetur autem quia et porro beatae molestias quasi. Sit, autem animi culpa quas maxime in alias saepe rerum repudiandae nobis?',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus laboriosam consectetur autem quia et porro beatae molestias quasi. Sit, autem animi culpa quas maxime in alias saepe rerum repudiandae nobis?',
    imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-JzIOQQ55f_0dLZWgDBRc_kpVZx6Jk0AMcS2RyDq&s'
  },{
    date: new Date(),
    title:'Content 5',
    intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus laboriosam consectetur autem quia et porro beatae molestias quasi. Sit, autem animi culpa quas maxime in alias saepe rerum repudiandae nobis?',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus laboriosam consectetur autem quia et porro beatae molestias quasi. Sit, autem animi culpa quas maxime in alias saepe rerum repudiandae nobis?',
    imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-JzIOQQ55f_0dLZWgDBRc_kpVZx6Jk0AMcS2RyDq&s'
  },{
    date: new Date(),
    title:'Content 6',
    intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus laboriosam consectetur autem quia et porro beatae molestias quasi. Sit, autem animi culpa quas maxime in alias saepe rerum repudiandae nobis?',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus laboriosam consectetur autem quia et porro beatae molestias quasi. Sit, autem animi culpa quas maxime in alias saepe rerum repudiandae nobis?',
    imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-JzIOQQ55f_0dLZWgDBRc_kpVZx6Jk0AMcS2RyDq&s'
  }]);

  const showCreatModel = () => {
    setShowCreateModel(true);
  };

  const closeCreateModel = () => {
    setShowCreateModel(false);
    setEditBloggIndex(-1)
  };

  return (
    <>
      <div className="m-20">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl text-gray-600 font-extrabold">BLOGG</h1>
            <p className="text-sm text-gray-700 mt-2 ">
              Enjoy reading blogs? Go and Enjoy...
            </p>
          </div>

          <button
            onClick={showCreatModel}
            className="bg-green-600 p-2 shadow max-h-[40px] text-white rounded "
          >
            Create Blogg
          </button>
        </div>
        <hr className="mt-6 " />

        {/* Create a Blogg */}
        <Blogs bloggs={bloggs} setBloggIndex={setBloggIndex} />
        <Modal
          show={showCreateModel}
          onClose={() => {
            setShowCreateModel(false);
          }}
        >
          <CreateBloggForm
            setBloggs={setBloggs}
            onCloseForm={closeCreateModel}
            blogg={bloggs[editBloggIndex]}
            editBloggIndex={editBloggIndex}
          />
        </Modal>

        {/* View Blogg */}
        <Modal
          show={bloggIndex > -1}
          onClose={() => {
            setBloggIndex(-1);
          }}
        >
          <BloggDetail bloggDetail={bloggs[bloggIndex]} />
          <div className="flex justify-end items-center gap-4 mt-6">

            <Button text="Edit" color="blue" 

            onClick={()=>{
              setEditBloggIndex(bloggIndex)
              setBloggIndex(-1)
              setShowCreateModel(true)
            }} />

            <Button text="Delete" color="red" onClick={()=>{
              setBloggs(prev => {
                return prev.filter((ele,i) =>{
                  return i!==bloggIndex
                })
              })
              setBloggIndex(-1)
              // console.log('deleted', bloggIndex)
            }}/>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default App;
/*
components
  - blog details
  - create blog form
  - submit button
  - input


  Create Blogg Form
  Blogg Details
*/
