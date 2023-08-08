import React from "react";
import MDXContent from "@theme/MDXContent";
import Layout from "@theme/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";

import Disclaimer from "./_disclaimer.mdx";

export default function DisclaimerPage() {
  return (
    <Layout>
      <PageHeader title="Disclaimer" />
      <div className="docMainWrapper wrapper">
        <div className="container margin-vert--xl">
          <MDXContent>
            <Disclaimer />
          </MDXContent>
        </div>
      </div>
    </Layout>
  );
}
