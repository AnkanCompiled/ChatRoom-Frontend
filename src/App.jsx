import Routing from "./routes";
import { AuthProvider } from "./contexts/authContext";
import "./App.css";

export default function App() {
  return (
    <>
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </>
  );
}
