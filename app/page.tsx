import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Dashboard/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      {/* Main Dashboard Content */}
      <main className="flex-1 overflow-auto">
        <Dashboard />
      </main>
    </div>
  );
}
