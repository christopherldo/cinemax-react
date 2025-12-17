import "./styles/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";
import { ThemeContextProvider } from "./context/ThemeContext/ThemeContextProvider.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SplashContextProvider } from "./context/SplashContext/SplashContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SplashContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </SplashContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
