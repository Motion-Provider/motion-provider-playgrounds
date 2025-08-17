import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { MessageSquareWarning } from "lucide-react";
import { FC, memo, useState } from "react";

export const HeaderAlert: FC = memo(() => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const handleCloseModal = () => setIsModalOpen((prev) => !prev);

  if (!isModalOpen) return null;

  return (
    <Alert variant="destructive">
      <AlertTitle className="inline-flex items-center gap-1">
        <MessageSquareWarning className="size-5" />
        CAUTION
      </AlertTitle>
      <AlertDescription className="text-xs pt-2 text-muted-foreground  inline">
        The playground may not reflecting the actual real-time performance. Keep
        it in mind that the <b>Motion Provider</b> is still in <i>BETA</i>. The
        mandatory optimizations will be done in the future — if the community
        shows enough demand. Stay tuned!
        <Button
          onClick={handleCloseModal}
          variant={"secondary"}
          className="w-full mt-2"
        >
          I understand
        </Button>
      </AlertDescription>
    </Alert>
  );
});

HeaderAlert.displayName = "HeaderAlert";
