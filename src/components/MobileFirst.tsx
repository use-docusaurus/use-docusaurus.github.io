import {
  IconContainer,
  Caption,
  BigText,
  Paragraph,
  Link,
} from "@/components/home/common";
import { CodeWindow, getClassNameForToken } from "@/components/CodeWindow";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { addClassTokens2 } from "@/utils/addClassTokens";
import clsx from "clsx";
import { GridLockup } from "../GridLockup";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { lines } from "../../pages/examples/mobile-first-demo";

addClassTokens2(lines);

const MIN_WIDTH = 400;

function BrowserWindow({ size, onChange }) {
  let x = useMotionValue(0);
  let constraintsRef = useRef();
  let handleRef = useRef();
  let iframeRef = useRef();
  let iframePointerEvents = useMotionValue("auto");

  useEffect(() => {
    function onMessage(e) {
      if (e.source === iframeRef.current.contentWindow) {
        onChange(e.data);
      }
    }

    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    let observer = new window.ResizeObserver(() => {
      let width =
        constraintsRef.current.offsetWidth - handleRef.current.offsetWidth;
      if (x.get() > width) {
        x.set(width);
      }
    });
    observer.observe(constraintsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    handleRef.current.onselectstart = () => false;
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="shadow-xl sm:rounded-xl min-w-full max-w-full demo-sm:min-w-0 demo-sm:max-w-none"
        style={{ width: useTransform(x, (x) => x + MIN_WIDTH) }}
      >
        <div className="sm:rounded-xl ring-1 ring-slate-900/5">
          <div className="relative bg-white border-t border-slate-200 rounded-b-xl pb-8 -mb-8 dark:bg-slate-800 dark:border-slate-900/50">
            <motion.iframe
              ref={iframeRef}
              src="/examples/mobile-first-demo"
              title="Mobile-first Demo"
              className="w-full h-[30.625rem]"
              style={{ pointerEvents: iframePointerEvents }}
            />
          </div>
        </div>
      </motion.div>
      <div
        ref={constraintsRef}
        className="absolute inset-y-0 pointer-events-none"
        style={{
          right: `-${22 / 16}rem`,
          width: `calc(100% - ${MIN_WIDTH}px + ${22 / 16}rem)`,
        }}
      >
        <motion.div
          ref={handleRef}
          drag="x"
          _dragX={x}
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={constraintsRef}
          className="absolute z-10 top-1/2 left-0 p-2 -mt-6 hidden demo-sm:flex items-center justify-center pointer-events-auto cursor-ew-resize"
          style={{ x }}
          onDragStart={() => {
            document.documentElement.classList.add("dragging-ew");
            iframePointerEvents.set("none");
          }}
          onDragEnd={() => {
            document.documentElement.classList.remove("dragging-ew");
            iframePointerEvents.set("auto");
          }}
        >
          <div className="w-1.5 h-8 bg-slate-500/60 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}

function Marker({ label, active, className }) {
  return (
    <div className={clsx("flex items-start flex-none", className)}>
      <div className="flex flex-col items-center ml-[-2px]">
        <div
          className={clsx(
            "w-px h-14",
            active ? "bg-indigo-600" : "bg-slate-100 dark:bg-slate-800"
          )}
        />
        <div
          className={clsx(
            "mt-[3px] w-[5px] h-[5px] shadow-sm rounded-full ring-1",
            active
              ? "bg-indigo-600 ring-indigo-600"
              : "bg-white ring-slate-500/[0.15] dark:bg-slate-900 dark:ring-slate-700"
          )}
        />
      </div>
      <div
        className={clsx(
          "ml-1.5 rounded font-mono text-[0.625rem] leading-6 px-1.5 ring-1 ring-inset dark:ring-0",
          active
            ? "bg-indigo-50 text-indigo-600 ring-indigo-600 dark:bg-indigo-500 dark:text-white dark:highlight-white/10"
            : "bg-slate-100 ring-slate-100 dark:bg-slate-800 dark:highlight-white/5"
        )}
      >
        {label}
      </div>
    </div>
  );
}

export function MobileFirst() {
  let [size, setSize] = useState();

  return (
    <section id="mobile-first" className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <IconContainer
          className="dark:bg-indigo-500 dark:highlight-white/20"
          light={require("@/img/icons/home/mobile-first.png").default.src}
          dark={require("@/img/icons/home/dark/mobile-first.png").default.src}
        />
        <Caption className="text-indigo-500 dark:text-indigo-400">
          Mobile-first
        </Caption>
        <BigText>Responsive everything.</BigText>
        <Paragraph as="div">
          <p>
            Wrestling with a bunch of complex media queries in your CSS sucks,
            so Tailwind lets you build responsive designs right in your HTML
            instead.
          </p>
          <p>
            Throw a screen size in front of literally any utility class and
            watch it magically apply at a specific breakpoint.
          </p>
        </Paragraph>
        <Link href="/docs/responsive-design" color="indigo" darkColor="gray">
          Learn more<span className="sr-only">, responsive design</span>
        </Link>
      </div>
      <div className="hidden mt-16 mb-12 border-b border-slate-100 xl:mb-0 demo-sm:block dark:border-slate-800">
        <div className="mb-[-3px] flex max-w-7xl mx-auto px-6 sm:px-8 md:px-10">
          <Marker
            label="sm"
            active={size !== undefined}
            className="ml-[40rem] w-32"
          />
          <Marker
            label="md"
            active={size === "md" || size === "lg"}
            className="w-64"
          />
          <Marker label="lg" active={size === "lg"} className="w-64" />
          <Marker label="xl" className="w-64" />
          <Marker label="2xl" />
        </div>
      </div>
      <GridLockup
        className="mt-10 demo-sm:-mt-2.5"
        overhang="md"
        beams={0}
        left={
          <>
            <div className="sm:px-2 demo-sm:-mt-24 xl:mt-0">
              <BrowserWindow size={size} onChange={setSize} />
            </div>
            <CodeWindow className="!max-h-[24.75rem] lg:!h-[24.75rem]">
              <CodeWindow.Code2 lines={lines.length}>
                {lines.map((tokens, lineIndex) => (
                  <div key={lineIndex}>
                    {tokens.map((token, tokenIndex) => {
                      if (token.types[token.types.length - 1] === "class") {
                        let isSm = token.content.startsWith("sm:");
                        let isMd = token.content.startsWith("md:");
                        let isLg = token.content.startsWith("lg:");

                        if (isSm || isMd || isLg) {
                          let faded =
                            size === undefined ||
                            (size === "sm" && (isMd || isLg)) ||
                            (size === "md" && isLg);
                          let highlighted =
                            (size === "sm" && isSm) ||
                            (size === "md" && isMd) ||
                            (size === "lg" && isLg);

                          return (
                            <span
                              key={tokenIndex}
                              className={clsx(
                                "code-highlight transition duration-500",
                                getClassNameForToken(token),
                                {
                                  "opacity-50": faded,
                                  "bg-code-highlight": highlighted,
                                }
                              )}
                            >
                              {token.content}
                            </span>
                          );
                        }
                      }
                      return (
                        <span
                          key={tokenIndex}
                          className={getClassNameForToken(token)}
                        >
                          {token.content}
                        </span>
                      );
                    })}
                  </div>
                ))}
              </CodeWindow.Code2>
            </CodeWindow>
          </>
        }
      />
    </section>
  );
}
