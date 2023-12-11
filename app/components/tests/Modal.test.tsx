import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Modal from '../Modal';


describe('Modal Component - Rendering', () => {
  it('renders without crashing', () => {
    const { getByText } = render(
      <Modal modalOpen={true} setModalOpen={() => {}}>
        Hello Modal
      </Modal>
    );
    const closeButton = getByText('✕');
    expect(closeButton).toBeInTheDocument();
  });

  it('renders children content', () => {
    const { getByText } = render(
      <Modal modalOpen={true} setModalOpen={() => {}}>
        Hello Modal
      </Modal>
    );
    const modalContent = getByText('Hello Modal');
    expect(modalContent).toBeInTheDocument();
  });

  it('renders additional content or components', () => {
    render(
      <Modal modalOpen={true} setModalOpen={() => {}}>
        <div>Additional Content</div>
      </Modal>
    );
    const additionalContent = screen.getByText('Additional Content');
    expect(additionalContent).toBeInTheDocument();
  });
});

describe('Modal Component - Interaction', () => {
  it('calls setModalOpen when close button is clicked', () => {
    const setModalOpenMock = jest.fn();
    const { getByText } = render(
      <Modal modalOpen={true} setModalOpen={setModalOpenMock}>
        Hello Modal
      </Modal>
    );
    const closeButton = getByText('✕');
    fireEvent.click(closeButton);
    expect(setModalOpenMock).toHaveBeenCalledWith(false);
  });

  it('executes a custom action when a button is clicked', () => {
    const customActionMock = jest.fn();
    const { getByText } = render(
      <Modal modalOpen={true} setModalOpen={() => {}}>
        <button onClick={customActionMock}>Click me</button>
      </Modal>
    );
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(customActionMock).toHaveBeenCalledTimes(1);
  });
});