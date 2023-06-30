import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/button/button";

export const Nav = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <nav>
      <Button
        type="button"
        variant="primary"
        icon={<ArrowLeft />}
        text="Go back"
        onClick={goBack}
      />
    </nav>
  );
};
