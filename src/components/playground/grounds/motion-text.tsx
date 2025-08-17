import {
  ChangeEvent,
  FC,
  memo,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import MotionText from "@/motion/motion-text";
import { getFontSizeClass } from "@/utils/fontSizeRange";
import { useDebounce } from "@uidotdev/usehooks";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Ban, MessageSquareWarning, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { useSelector } from "react-redux";
import { ReduxRootState } from "@/redux";
import { selectController } from "@/redux/slices/utils";
import {
  FieldWrapperProps,
  TextConfigDispatch,
  TextFieldsDispatch,
  TextFieldsValue,
} from "@/interfaces/@types-components";
import {
  textInitialDesc,
  textInitialDuration,
  textInitialHeader,
  textNextUpdateDebounce,
} from "@/constants/grounds/playgrounds.lib";
import {
  TextConfigDispatchContext,
  TextConfigValueContext,
  TextFieldsDispatchContext,
  TextFieldsValueContext,
} from "@/contexts/text-contexts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [duration, setDuration] = useState<number>(textInitialDuration);
  const [fields, setFields] = useState<TextFieldsValue>({
    header: textInitialHeader,
    desc: textInitialDesc,
  });

  const fieldsRef = useRef(fields);
  const durationRef = useRef(duration);

  useEffect(() => {
    fieldsRef.current = fields;
  }, [fields]);
  useEffect(() => {
    durationRef.current = duration;
  }, [duration]);

  const debouncedFields = useDebounce(fields, textNextUpdateDebounce);

  const fieldsValue = useMemo(
    () => ({ header: debouncedFields.header, desc: debouncedFields.desc }),
    [debouncedFields.header, debouncedFields.desc]
  );
  const configValue = useMemo(() => ({ duration }), [duration]);

  const fieldsDispatch = useMemo<TextFieldsDispatch>(() => {
    return {
      setHeader: (v: string) => setFields((p) => ({ ...p, header: v })),
      setDesc: (v: string) => setFields((p) => ({ ...p, desc: v })),
      getHeader: () => fieldsRef.current.header,
      getDesc: () => fieldsRef.current.desc,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // stable
  const configDispatch = useMemo<TextConfigDispatch>(() => {
    return {
      setDuration: (v: number) => setDuration(v),
      getDuration: () => durationRef.current,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // stable

  return (
    <TextFieldsDispatchContext.Provider value={fieldsDispatch}>
      <TextFieldsValueContext.Provider value={fieldsValue}>
        <TextConfigDispatchContext.Provider value={configDispatch}>
          <TextConfigValueContext.Provider value={configValue}>
            {children}
          </TextConfigValueContext.Provider>
        </TextConfigDispatchContext.Provider>
      </TextFieldsValueContext.Provider>
    </TextFieldsDispatchContext.Provider>
  );
};

const HeaderInput: FC = memo(() => {
  const { setHeader, getHeader } = useContext(TextFieldsDispatchContext);
  const [local, setLocal] = useState<string>(() => getHeader());

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value;
      setLocal(v);
      setHeader(v);
    },
    [setHeader]
  );

  return (
    <FieldWrapper>
      <Label htmlFor="header">Header</Label>
      <Input
        type="text"
        id="header"
        name="header"
        className="w-full"
        value={local}
        onChange={onChange}
      />
      <p className="text-muted-foreground text-xs">
        *Type a header to be animated.
      </p>
    </FieldWrapper>
  );
});

const DescInput: FC = memo(() => {
  const { setDesc, getDesc } = useContext(TextFieldsDispatchContext);
  const [local, setLocal] = useState<string>(() => getDesc());

  const onChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const v = e.target.value;
      setLocal(v);
      setDesc(v);
    },
    [setDesc]
  );

  return (
    <FieldWrapper>
      <Label htmlFor="desc">Description</Label>
      <Textarea
        id="desc"
        name="desc"
        className="w-full"
        value={local}
        onChange={onChange}
      />
      <p className="text-muted-foreground text-xs">
        *Type a description to be animated.
      </p>
    </FieldWrapper>
  );
});

const DurationControl: FC = memo(() => {
  const { setDuration } = useContext(TextConfigDispatchContext);
  const { duration } = useContext(TextConfigValueContext);

  return (
    <FieldWrapper>
      <Label htmlFor="duration">Config Duration</Label>
      <div className="flex flex-row-reverse">
        <Badge variant="secondary" className="dark border-l-0 rounded-l-none">
          Duration {duration.toFixed(3)}
          {"(s)"}
        </Badge>
        <Slider
          id="duration"
          defaultValue={[duration]}
          max={1}
          step={0.005}
          value={[duration]}
          onValueChange={(value) => setDuration(value[0])}
          className="dark border  rounded-l-md border-r-0 p-2 "
        />
      </div>
    </FieldWrapper>
  );
});

const HeaderAlert: FC = memo(() => {
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

const MotionPreview: FC = memo(() => {
  const { settings } = useSelector((state: ReduxRootState) => state.metadata);
  const { animation, delayLogic } = useSelector(
    (state: ReduxRootState) => state.motion
  );
  const { isAnimationStopped, reverse } = useSelector(selectController);

  const { mode, space, fontSize } = settings["MotionText"];
  const fontSizeClass = useMemo(() => getFontSizeClass(fontSize), [fontSize]);

  const { header, desc } = useContext(TextFieldsValueContext);
  const { duration } = useContext(TextConfigValueContext);
  const headerKey = useMemo(
    () => `header-${animation.mode[0]}-${header.split(" ").join("-")}`,
    [animation.mode, header]
  );
  const descKey = useMemo(
    () => `desc-${animation.mode[0]}-${desc.split(" ").join("-")}`,
    [animation.mode, desc]
  );

  return (
    <ResizablePanel defaultSize={65} className="p-12">
      <ScrollArea className="size-full">
        <MotionText
          elementType="h1"
          animation={animation}
          config={{
            duration,
            mode,
            space,
            delayLogic,
          }}
          className="text-4xl tracking-tighter"
          key={headerKey}
          controller={{
            configView: {
              amount: 0.1,
              once: false,
            },
            isAnimationStopped,
            reverse,
            trigger: true,
          }}
        >
          {header}
        </MotionText>
        <br />
        <MotionText
          elementType="p"
          animation={animation}
          config={{
            duration,
            mode,
            space,
            delayLogic,
          }}
          wrapperClassName={cn("tracking-tight", fontSizeClass)}
          key={descKey}
          controller={{
            configView: {
              amount: 0.1,
              once: false,
            },
            isAnimationStopped,
            reverse,
            trigger: true,
          }}
        >
          {desc}
        </MotionText>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </ResizablePanel>
  );
});

export default function Text() {
  return (
    <div className="h-4/5 w-3/5 border rounded-lg">
      <TextProvider>
        <ResizablePanelGroup direction="horizontal" className="size-full">
          <ResizablePanel
            defaultSize={35}
            className=" p-4 z-50 size-full relative"
          >
            <ScrollArea className="size-full p-4">
              <HeaderAlert />
              <br />
              <HeaderInput />
              <br />
              <DescInput />
              <br />
              <DurationControl />
              <br />
              <Utilities />
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </ResizablePanel>

          <ResizableHandle withHandle />
          <MotionPreview />
        </ResizablePanelGroup>
      </TextProvider>
    </div>
  );
}

const FieldWrapper: FC<FieldWrapperProps> = ({ children }) => (
  <div className="flex flex-col gap-1 w-full">{children}</div>
);

const Utilities = () => {
  const handleResetFields = () => {};
  return (
    <Card className="dark w-full bg-transparent">
      <CardHeader>
        <CardTitle>Utilities</CardTitle>
        <CardDescription>
          Useful tools for better configuration.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldWrapper>
          <Button
            variant="ghost"
            onClick={handleResetFields}
            className="w-full bg-rose-500/80 hover:text-rose-500"
          >
            <Trash className="size-4" />
            <pre>Reset Fields</pre>
          </Button>
          <Button
            variant="outline"
            onClick={handleResetFields}
            className="w-full mt-1"
          >
            <Ban className="size-4" />
            <pre>Reset Settings</pre>
          </Button>
        </FieldWrapper>
      </CardContent>
    </Card>
  );
};

HeaderAlert.displayName = "HeaderAlert";
DurationControl.displayName = "DurationControl";
DescInput.displayName = "DescInput";
HeaderInput.displayName = "HeaderInput";
MotionPreview.displayName = "MotionPreview";
