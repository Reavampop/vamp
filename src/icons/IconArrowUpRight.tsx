import React from "react";

export default function IconArrowUpRight(
  props: React.ComponentPropsWithoutRef<"svg">
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        fill="currentColor"
        d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"
      />
    </svg>
  );
}
