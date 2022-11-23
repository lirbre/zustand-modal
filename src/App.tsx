import React from 'react';
import './App.css';

import { Button } from './components'
import { useModalStore } from './stores/modal-store';

function App() {
  const open = useModalStore(state => state.open)
  const updateModalContent = useModalStore(state => state.updateModalContent)

  const handleOpenForm = () => {
    updateModalContent([{
      modalBody: <form id="test-form-id" onSubmit={(e) => {
        e.preventDefault()
        alert('submit')
      }} />,
      modalHeader: 'Adicionar novo funcionário',
      cancelText: 'Cancelar',
      confirmText: 'Adicionar',
      formId: 'test-form-id'
    }])

    open()
  }

  const handleOpenSimple = () => {
    updateModalContent([{
      modalBody: <div>test</div>,
      modalHeader: 'Adicionar novo funcionário',
      cancelText: 'Cancelar',
      confirmText: 'Adicionar'
    },{
      modalBody: <div>test 2</div>,
      modalHeader: 'Adicionar novo funcionário 2',
      cancelText: 'Cancelar 2',
      confirmText: 'Adicionar 2'
    }])

    open()
  }

  return (
    <div>
      <Button onClick={handleOpenForm} btnColor='transparent' text={'Open Form'} textColor='#000' />
      <Button onClick={handleOpenSimple} btnColor='#EF6F2B' text={'Open Simple'} textColor='#FFF' />
    </div>
  );
}

export default App;
