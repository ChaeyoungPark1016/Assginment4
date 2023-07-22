import { SWRConfig } from "swr";
import Layout from "@/components/Layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";


function App({ Component, pageProps }) {
  return (
    <div className="global">
      <Layout>
        <SWRConfig
          value={{
            fetcher: async (url) => {
              const res = await fetch(url);
              if (!res.ok) {
                const error = new Error("An error occurred while fetching the data");
                error.info = await res.json();
                error.status = res.status;
                throw error;
              }
              return res.json();
            },
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </Layout>
    </div>
  );
}

export default App;
