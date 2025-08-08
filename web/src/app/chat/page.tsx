// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { Suspense } from "react";

import { Logo } from "../../components/deer-flow/logo";

const Main = dynamic(() => import("./main"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      正在加载智能课件助手...
    </div>
  ),
});

export default function HomePage() {
  const t = useTranslations("chat.page");

  return (
    <div className="flex h-screen w-screen justify-center overscroll-none">
      <header className="fixed top-0 left-0 flex h-12 w-full items-center justify-between px-4">
        <Logo />
      </header>
      <Main />
    </div>
  );
}
