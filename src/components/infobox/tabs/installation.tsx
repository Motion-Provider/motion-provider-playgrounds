"use client";

import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyCode } from "@/components/copy-code";
import { Badge } from "@/components/ui/badge";
import { Alert } from "@/components/ui/alert";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import { MessageCircleWarning } from "lucide-react";
import { useCopyToClipboard } from "@uidotdev/usehooks";

SyntaxHighlighter.registerLanguage("bash", bash);

/**
 * Data-driven configuration:
 * - packageManagers: drives the install tab triggers + contents
 * - steps: drives the rest of the cards (Add Provider, Usage, etc.)
 *
 * Edit these arrays to change what's rendered.
 */
const packageManagers = [
  {
    id: "npm",
    label: "npm",
    code: `npm i motion-provider`,
  },
  {
    id: "yarn",
    label: "yarn",
    code: `yarn add motion-provider`,
  },
  {
    id: "pnpm",
    label: "pnpm",
    code: `pnpm add motion-provider`,
  },
];

const gitCloneCode =
  "git clone https://github.com/uidotdev/motion-provider.git";

export default function Installation() {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const handleCopyCode = (code: string) => copyToClipboard(code);

  const defaultManager = packageManagers[0]?.id ?? "npm";

  return (
    <div className="h-full w-full px-6 py-2">
      <ScrollArea className="h-60 w-full">
        <header className="pt-2">
          <h3 className="text-xl  leading-tight">Motion Provider — BETA</h3>
          <p className="text-sm text-muted-foreground leading-snug mt-0.5">
            Quick installation guide for early eagers.
          </p>
        </header>

        <Card className="bg-transparent border-none shadow-none max-w-xs">
          <CardContent className="space-y-2 px-0">
            <div className="flex items-center justify-between ">
              <h4 className="text-sm font-medium text-muted-foreground tracking-tight">
                1. Install via package managers
              </h4>
            </div>
            <Tabs defaultValue={defaultManager}>
              <TabsList className="h-9 bg-transparent">
                {packageManagers.map((pm) => (
                  <TabsTrigger
                    key={pm.id}
                    value={pm.id}
                    className="text-sm px-3"
                  >
                    {pm.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {packageManagers.map((pm) => (
                <TabsContent key={pm.id} value={pm.id} className="max-w-2xs">
                  <div className="relative">
                    <SyntaxHighlighter
                      language="bash"
                      style={tomorrow}
                      customStyle={{
                        background: "none",
                        border: "1px solid rgba(115, 115, 115, 0.25)",
                        fontSize: "0.875rem",
                        padding: "0.6rem",
                        borderRadius: 8,
                      }}
                      showLineNumbers={false}
                    >
                      {pm.code}
                    </SyntaxHighlighter>

                    <div className="absolute top-1 right-1">
                      <CopyCode
                        onClick={() => handleCopyCode(pm.code)}
                        variant="outline"
                        className="scale-95"
                        aria-label={`Copy ${pm.label}`}
                      />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            <p className="text-rose-500/80 text-sm tracking-tight w-full inline-flex items-center border p-2 max-w-2xs rounded-md">
              *<MessageCircleWarning className="mr-1 shrink-0" /> Package
              managers are not yet supported! Subscribe to emails to be notified
              when they are. Thanks for your understanding.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-transparent border-none shadow-none max-w-xs -mt-4">
          <CardContent className="space-y-2 px-0">
            <div className="flex items-center justify-between ">
              <h4 className="text-sm font-medium text-muted-foreground tracking-tight">
                2. Fork the repo for testing
              </h4>
            </div>
            <div className="max-w-2xs relative">
              <SyntaxHighlighter
                language="bash"
                style={tomorrow}
                customStyle={{
                  background: "none",
                  border: "1px solid rgba(115, 115, 115, 0.25)",
                  fontSize: "0.875rem",
                  padding: "0.6rem",
                  borderRadius: 8,
                }}
                showLineNumbers={false}
              >
                {gitCloneCode}
              </SyntaxHighlighter>

              <div className="absolute top-1 right-1">
                <CopyCode
                  onClick={() => handleCopyCode(gitCloneCode)}
                  variant="secondary"
                  className="scale-95"
                  aria-label={`Copy ${gitCloneCode}`}
                />
              </div>
            </div>
            <p className="text-muted-foreground text-xs tracking-tight max-w-2xs ">
              *This repo is still a work in progress, so expect some changes. A
              template in it as well, therefore you can play with freely!
            </p>
          </CardContent>
        </Card>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
}
