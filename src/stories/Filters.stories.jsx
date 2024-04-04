import FiltersComponent from '../components/FiltersComponent'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const dummyHandler = ()=>{}

export default {
    title: "Filter component",
    component: FiltersComponent,
    decorators: [
        (Story) => (
          <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
        )
      ],
}

export const FilterButtons = () => <FiltersComponent handleMaxChange={dummyHandler} queryChange={dummyHandler} />