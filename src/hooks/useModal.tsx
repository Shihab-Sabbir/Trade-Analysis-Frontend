import { App, Button, ButtonProps, Modal, ModalFuncProps, ModalProps } from 'antd';
import { useState } from 'react';

interface useModalProps extends Omit<ModalProps, 'classNames'> {
  triggerButtonText: string;
  triggerButtonProps?: ButtonProps;
  classNames?: string;
  onCancelButtonClick?: () => void;
  onTriggerButtonClick?: () => void;
}

export const useModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const { modal: dynamicModal } = App.useApp();

  const ModalBox = ({
    triggerButtonText,
    triggerButtonProps,
    onTriggerButtonClick = () => setOpenModal(true),
    onCancelButtonClick = () => setOpenModal(false),
    children,
    centered = true,
    destroyOnClose = true,
    classNames,
    ...rest
  }: useModalProps) => (
    <>
      <Button onClick={onTriggerButtonClick} {...triggerButtonProps}>
        {triggerButtonText}
      </Button>
      <Modal
        open={openModal}
        destroyOnClose={destroyOnClose}
        centered={centered}
        onCancel={onCancelButtonClick}
        className={`${classNames ? classNames : ''} overflow-hidden`}
        {...rest}
      >
        {children}
      </Modal>
    </>
  );

  interface IinfoModal extends ModalFuncProps {
    type?: 'info' | 'success' | 'error' | 'warning' | 'confirm';
    afterCloseFn?: () => void;
  }

  const infoModal = ({
    centered = true,
    type = 'confirm',
    afterCloseFn,
    ...props
  }: IinfoModal) => {
    if (openInfoModal) {
      return;
    }
    const afterClose = () => {
      afterCloseFn && afterCloseFn();
      setOpenInfoModal(false);
    };
    setOpenInfoModal(true);
    return dynamicModal[type]({ ...props, afterClose, centered });
  };

  return { ModalBox, setOpenModal, infoModal };
};
