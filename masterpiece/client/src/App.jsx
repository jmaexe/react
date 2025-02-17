import React, { useState } from "react";
import './App.css'
import { RouterProvider } from "react-router-dom";
import router from './Router'
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient()

const App = () => {
  document.documentElement.setAttribute('data-theme', (localStorage.getItem('theme') ? localStorage.getItem('theme') : 'cupcake'))

  return (
      <QueryClientProvider client={queryClient} >
        <RouterProvider router={router} />
      </QueryClientProvider>
  );
};

export default App;
