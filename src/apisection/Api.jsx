import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import Poke from './apicomponent/Poke';
import TitleSection from './apicomponent/TitleSection';
import { PokeContextProvider } from './apicontext/pokeContext';

export default function API() {
  const queryClient = new QueryClient();
  return (
    <section>
      <QueryClientProvider client={queryClient}>
        <PokeContextProvider value>
          <div className="md:ml-20">
            <TitleSection />
            <Poke />
          </div>
        </PokeContextProvider>
      </QueryClientProvider>
    </section>
  );
}
