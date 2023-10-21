import { useState } from "react";

export const useToggleStatus = (initialStatus: boolean) => {
  const [status, setStatus] = useState(initialStatus);
  const handleToggleStatus = () => setStatus(!status);

  return {
    status,
    handleToggleStatus
  }
}