import React, { Suspense, lazy } from "react";

import Header from "../../components/Header";
import CssBaseline from "@mui/material/CssBaseline";
import data from "../../Data/data.json";
import { Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";

// import TabsPC from "./TabsPc";
// import TabsPhone from "./TabsPhone";

const TabsPC = lazy(() => import("./TabsPc"));
const TabsPhone = lazy(() => import("./TabsPhone"));

function SubjectPage() {
  // get parameters from url
  const router = useRouter();
  const { subject } = router.query;

  //   const { subjectID } = useParams();

  // get the subjcet from data that matches the subject param
  //   const subjects = data.semesters.map((semester) =>
  //     semester.subjects.filter((subject) => subject.abbreviation === subjectID)
  //   );
  //   const subject = subjects
  //     .filter((subject) => subject.length > 0)
  //     .map((subject) => subject[0]);

  return (
    <>
      <Head>
        <title>{subject}</title>
        <link
          rel="icon"
          href={
            "https://media.discordapp.net/attachments/1008571067398369291/1072747092805701672/9i0uyhiy_centered_book_book_faceing__main_object_is_book_a_book_1c9248e7-67be-4b89-86ac-96c79d314feb-removebg-preview.png?width=372&height=372"
          }
        />
      </Head>
      <CssBaseline />
      <Header title={subject} isSearch={false} />
      <Suspense fallback={<div>Loading...</div>}>
        <TabsPC />
        <TabsPhone />
      </Suspense>
    </>
  );
}

export default SubjectPage;

// function to get subject data from subject api, using subject abbreviation

const getSubject = async (subjectID) => {
  const response = await fetch(
    `http://localhost:3000/api/subjects/${subjectID}`
  );
  const data = await response.json();
  return data;
};
