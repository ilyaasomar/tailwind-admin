import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { FaDropbox } from "react-icons/fa";
import {router} from './routes/MainRoutes'
import {
  RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <div className="max-w-[1640px]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;