import { createRoot } from 'react-dom/client';
import { providerRouter } from "~/routers/router";
import "~/styles/global.css";
createRoot(document.getElementById('root')!).render(providerRouter);
