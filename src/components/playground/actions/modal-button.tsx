import { Settings2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { setModalState } from "@/redux/slices/utils";
import { Button } from "@/components/ui/button";

const ModalButton = () => {
  const dispatch = useDispatch();
  const onModalOpen = () => dispatch(setModalState(true));

  return (
    <Button variant="ghost" className="cursor-pointer" onClick={onModalOpen}>
      <Settings2 className="size-5" />
    </Button>
  );
};

export default ModalButton;
