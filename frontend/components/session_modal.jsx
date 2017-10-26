import React from 'react';

export default function SessionModal ({modal, component: Component, closeModal}) {
  let modalContent;
  if (modal) {
    modalContent = (
      <div className="modal-backdrop" onClick={closeModal}>
        <Component />
      </div>
    );
  } else {
    modalContent = null;
  }
  return modalContent;
}
