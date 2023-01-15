import ToggleLocale from "./ToggleLocale";
import ToggleTheme from "./ToggleTheme";

function FloatingToggle() {
  return (
    <div className="fixed top-3 right-5 z-[100] flex gap-x-1 lg:bottom-5 lg:top-auto">
      <ToggleTheme />
      <ToggleLocale />
    </div>
  );
}

export default FloatingToggle;
