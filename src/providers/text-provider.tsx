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
  TextConfigDispatch,
  TextFieldsDispatch,
  TextFieldsValue,
} from "@/interfaces/@types-components";
import { useDebounce } from "@uidotdev/usehooks";
import { FC, ReactNode, useEffect, useMemo, useRef, useState } from "react";

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
export default TextProvider;
TextProvider.displayName = "TextProvider";
