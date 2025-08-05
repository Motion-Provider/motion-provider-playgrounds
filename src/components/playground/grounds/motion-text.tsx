import { cn } from "@/lib/utils";
import { FC, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { MotionTextCloneProps } from "@/interfaces/@types-components";
import MotionText from "@/motion/motion-text";
import { getFontSizeClass } from "@/utils/fontSizeRange";
import { useDebounce } from "@uidotdev/usehooks";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MessageSquareWarning } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const initialDesc =
  "Proident est excepteur ad enim. Commodo sint ad ex incididunt nisi id non et nulla dolore proident nisi ipsum. Et nisi eiusmod fugiat non officia dolore in pariatur ullamco duis. Qui consequat consectetur fugiat velit culpa Lorem enim enim qui ea non deserunt quis. Tempor et qui ea laborum adipisicing dolor quis consectetur magna et eiusmod ad eiusmod. Fugiat laboris fugiat ut cupidatat Lorem minim duis quis dolore. Est ullamco cupidatat sint qui nisi.";
const initialHeader = "Cillum exercitation duis in laborum ad dolore.";

const Text: FC<MotionTextCloneProps> = ({
  animation,
  delayLogic,
  settings,
  controller,
}) => {
  const { mode, space, fontSize } = settings;

  const [configDuration, setConfigDuration] = useState<number>(0.01);
  const [fields, setFields] = useState({
    header: initialHeader,
    desc: initialDesc,
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const debouncedFields = useDebounce(fields, 1000);

  const fontSizeClass = useMemo(() => getFontSizeClass(fontSize), [fontSize]);

  const handleCloseModal = () => setIsModalOpen((prev) => !prev);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const onConfigurationChange = (value: number) => setConfigDuration(value);

  return (
    <div className="h-4/5 w-3/5 border rounded-lg">
      <ResizablePanelGroup direction="horizontal" className="size-full">
        <ResizablePanel
          defaultSize={35}
          className="flex items-start flex-col gap-6 p-8 z-50"
        >
          {isModalOpen && (
            <Alert variant="destructive">
              <AlertTitle className="inline-flex items-center gap-1">
                <MessageSquareWarning className="size-5" />
                CAUTION
              </AlertTitle>
              <AlertDescription className="text-xs pt-2 text-muted-foreground">
                The playground may not reflecting the actual real-time
                performance. Memory usage depends on the amount of text you type
                since each creates a new DOM instance. Initially, debouncing is
                being used however keep it in mind that the Motion Provider is
                still in BETA. The mandatory optimizations will be done in the
                future — if the community shows enough demand. Cheers!
                <Button
                  onClick={handleCloseModal}
                  variant={"secondary"}
                  className="w-full mt-2"
                >
                  I understand
                </Button>
              </AlertDescription>
            </Alert>
          )}
          <div className="flex flex-col gap-1 w-full">
            <Label htmlFor="header">Header</Label>
            <Input
              type="text"
              id="header"
              name="header"
              value={fields.header}
              className="w-full"
              onChange={handleChange}
            />
            <p className="text-muted-foreground text-xs">
              *Type a header to be animated.
            </p>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <Label htmlFor="desc">Description</Label>
            <Input
              type="text"
              id="desc"
              name="desc"
              value={fields.desc}
              className="w-full"
              onChange={handleChange}
            />

            <p className="text-muted-foreground text-xs">
              *Type a description to be animated.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="duration">Config Duration</Label>
            <div className="flex flex-row-reverse">
              <Badge
                variant="secondary"
                className="dark border-l-0 rounded-l-none"
              >
                Duration {configDuration.toFixed(3)}
                {"(s)"}
              </Badge>
              <Slider
                id="duration"
                defaultValue={[configDuration]}
                max={1}
                step={0.005}
                value={[configDuration]}
                onValueChange={(value) => onConfigurationChange(value[0])}
                className="dark border  rounded-l-md border-r-0 p-2 "
              />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={65} className="p-12">
          <ScrollArea className="size-full">
            <MotionText
              elementType="h1"
              animation={animation}
              config={{
                duration: configDuration,
                mode,
                space,
                delayLogic,
              }}
              className="text-4xl tracking-tighter"
              key={animation.mode[0]}
              controller={controller}
            >
              {debouncedFields.header}
            </MotionText>
            <br />
            <MotionText
              elementType="p"
              animation={animation}
              config={{
                duration: configDuration,
                mode,
                space,
                delayLogic,
              }}
              wrapperClassName={cn("tracking-tight", fontSizeClass)}
              key={`${animation.mode[0]}-desc`}
              controller={controller}
            >
              {debouncedFields.desc}
            </MotionText>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Text;
