import TagsDisplay from '../components/TagsDisplay'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default {
    title: "Tags display",
    component: TagsDisplay,
    decorators: [
        (Story) => (
          <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
        )
      ],
}

export const TagDisplay = () => <TagsDisplay />