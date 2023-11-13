import { ReactNode } from "react";

export default function AuthFormAside({children}:{children:ReactNode }) {
  return (
    <div className="flex-1 border flex justify-center items-center">
      {children}
    </div>
  );
}
