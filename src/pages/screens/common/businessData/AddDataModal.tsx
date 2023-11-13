import { useModal } from "../../../../hooks/useModal";
import AddTransactionForm from "./components/AddTransactionForm";

export default function AddDataModal() {
  const { ModalBox ,setOpenModal} = useModal();
  return (
    <ModalBox
    triggerButtonText="Add Transaction"
    triggerButtonProps={{ size: 'small', type: 'primary' }}
    footer={null}
    title="Create a new transaction"
    maskClosable={false}
    children = {<AddTransactionForm setOpenModal={setOpenModal}/>}
    destroyOnClose
  />
  )
}
