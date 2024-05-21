import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from "react-router-dom";

export default function Header({ children, showBackButton }) {
  const navigate = useNavigate();

  return (
    <header className="w-screen bg-neutral-50 h-1/6">
      <nav className="sm:mx-auto flex items-center justify-between p-2 sm:p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between">
          {showBackButton && (
            <ArrowLeftIcon
              className="size-8 text-black cursor-pointer hidden md:block mr-8"
              onClick={() => navigate("/admin/home")}
            />
          )}
          <h3 className="text-4xl font-black"><span className="text-orange-300">Event</span>Hub</h3>
        </div>
        <div>
          {children}
        </div>
      </nav>
    </header>
  );
}
