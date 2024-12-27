"use client";

import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";
import { ImperativePanelHandle } from "react-resizable-panels";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

const getLadleUrl = (story) => {
  const isDevelopment = process.env.NODE_ENV === "development";
  if (isDevelopment) {
    return `http://localhost:61000/ladle?story=${story}&mode=preview`;
  }
  return `/ladle?mode=preview&story=${story}`;
};

export default function ResizableLadlePreview({ story, height }) {
  const resizablePanelRef = React.useRef<ImperativePanelHandle>(null);

  const { colorMode, setColorMode } = useColorMode();

  React.useEffect(() => {
    const updateIframeTheme = (theme) => {
      const iframe = document.querySelector("iframe");
      if (iframe && iframe.contentDocument) {
        iframe.contentDocument.documentElement.setAttribute(
          "data-theme",
          theme
        );
      }
    };

    updateIframeTheme(colorMode);
  }, [colorMode]);

  return (
    <div className="group-data-[view=code]/block-view-wrapper:hidden md:h-[--height] twp">
      <div className="grid w-full gap-4">
        <ResizablePanelGroup direction="horizontal" className="relative z-10">
          <ResizablePanel
            ref={resizablePanelRef}
            className="relative aspect-[4/2.5] rounded-xl border bg-background md:aspect-auto"
            defaultSize={100}
            minSize={30}
          >
            <iframe
              allow="cross-origin-isolated"
              src={getLadleUrl(story)}
              height={height || 930}
              className="relative z-20 hidden w-full bg-background md:block"
            />
          </ResizablePanel>
          <ResizableHandle className="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 md:block" />
          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
