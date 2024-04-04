import ListComponent from "../components/ListComponent"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default {
    title: "List",
    component: ListComponent,
    decorators: [
        (Story) => (
          <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
        )
      ],
}

export const List = () => <ListComponent />