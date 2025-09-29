import { useMediaQuery } from "@uidotdev/usehooks";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { MessageCircleWarning } from "lucide-react";

const DesktopAlert = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (!isMobile) {
    return null;
  }

  return (
    <Alert variant="default" className="animate-pulse">
      <AlertTitle className="inline-flex gap-2">
        <MessageCircleWarning className="size-5" />
        <span>You are currently using a mobile device.</span>
      </AlertTitle>
      <AlertDescription>
        Please use the desktop version in order to access the full features.
        Playgrounds has designed specifically for desktop. Thanks for your
        understanding 🙏
      </AlertDescription>
    </Alert>
  );
};

export default DesktopAlert;
