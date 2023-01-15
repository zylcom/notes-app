import { GiSpinningBlades } from "react-icons/gi";
import { LocaleContext } from "../contexts";
import { useContext } from "react";

function LoadingSpinner() {
  const { context: locale } = useContext(LocaleContext);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col items-center justify-center">
        <GiSpinningBlades className="h-14 w-14 animate-spin" />
        <span className="font-rubik text-sm">
          {locale === "id" ? "Memuat" : "Loading"}
        </span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
