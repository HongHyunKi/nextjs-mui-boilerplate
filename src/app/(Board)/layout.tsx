import * as React from "react";
import BoardLayout from "@/components/layouts/BoardLayout";

// 예시 메타데이터
export const metadata = {
  title: "Board !",
  description: "This is Board ~",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BoardLayout>{children}</BoardLayout>;
}
