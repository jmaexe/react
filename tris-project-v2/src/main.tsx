import { RouterProvider, createRouter } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";

// Import the generated route tree
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NameProvider } from "./contexts/NameContext";
import { routeTree } from "./routeTree.gen";
import theme from "./theme";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
const queryClient = new QueryClient();
// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    // <StrictMode>
    <StyledEngineProvider injectFirst>
      <QueryClientProvider client={queryClient}>
        <NameProvider>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </NameProvider>
      </QueryClientProvider>
    </StyledEngineProvider>
    // </StrictMode>
  );
}
