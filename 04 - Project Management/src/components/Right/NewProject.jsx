import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ createNewProject, cancelNewProject }) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value.trim();
    const enteredDescription = description.current.value.trim();
    const eneteredDueDate = dueDate.current.value;

    // Validation
    if (!(enteredTitle.trim && enteredDescription && eneteredDueDate)) {
      modal.current.open();
      return;
    }

    createNewProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: eneteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay.">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="mb-4 text-stone-600">
          Oops... looks like you forgot to enter something.
        </p>
        <p className="mb-4 text-stone-600">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={cancelNewProject}
            >
              Cancel
            </button>
          </li>

          <li>
            <button
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
              onClick={() => handleSave()}
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input ref={title} label={"Title"} type="text" required />
          <Input ref={description} label={"Description"} textarea required />
          <Input ref={dueDate} label={"Due Date"} type="date" required />
        </div>
      </div>
    </>
  );
};

export default NewProject;
