import { useState } from "react";
import Blogs from "./components/Blogs";
import Modal from "./components/Modal";

function App() {
  const  [showCreateModel, setshowCreateModel] = useState(false)

  const showCreatModel = () =>{
    setshowCreateModel(true)
  }
  return (
    <>
      <div className="m-20">
      <button onClick={showCreatModel} className="bg-red-400 text-white rounded ">Open Model</button>
        <Blogs />
        <Modal show={showCreateModel} onClose={()=>{setshowCreateModel(false)}}>
          <Blogs />
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
