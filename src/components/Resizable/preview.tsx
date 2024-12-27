"use client";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./index";
import * as React from "react";
import { ImperativePanelHandle } from "react-resizable-panels";

const getLadleUrl = (story) => {
  const isDevelopment = process.env.NODE_ENV === "development";
  if (isDevelopment) {
    return `http://localhost:61000/ladle?story=${story}&mode=preview`;
  }
  return `/ladle?mode=preview&story=${story}`;
};

export function BlockViewerView() {
  const resizablePanelRef = React.useRef<ImperativePanelHandle>(null);

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
              src={getLadleUrl("page--world")}
              height={930}
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
