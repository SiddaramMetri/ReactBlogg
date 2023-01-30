import { useState } from "react";
import Blogs from "./components/Blogs";
import CreateBloggForm from "./components/CreateBloggForm";
import Modal from "./components/Modal";

function App() {
  const [showCreateModel, setShowCreateModel] = useState(false);

  const [bloggs, setBloggs] = useState([]);

  const showCreatModel = () => {
    setShowCreateModel(true);
  };

  const closeCreateModel = () => {
    setShowCreateModel(false);
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
        <Blogs bloggs={bloggs} />
        <Modal
          show={showCreateModel}
          onClose={() => {
            setShowCreateModel(false);
          }}
        >
          <CreateBloggForm
            setBloggs={setBloggs}
            onCloseForm={closeCreateModel}
          />
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
