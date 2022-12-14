import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

import TopDisplay from "../components/top-display";
import { PageProps } from "../utils/page-props";
import { projectData } from "../utils/project-data";
import { transitionSlow } from "../utils/transition";

const MotionTopDisplay = motion(TopDisplay);

const Home: NextPage<PageProps> = (props) => {
  return (
    <>
      <Head>
        <title>Shirley Lyu Portfolio</title>
      </Head>
      <div className="flex-grow h-screen overflow-hidden relative">
        <AnimatePresence initial={false}>
          <MotionTopDisplay
            project={projectData[props.displayProject]}
            link
            animation={props.displayAnimation}
            absolute={true}
            initial={{ opacity: props.displayAnimation ? 0 : 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: props.displayAnimation ? 0 : 1 }}
            transition={transitionSlow}
            key={props.displayProject}
          />
        </AnimatePresence>
      </div>
    </>
  );
};

export default Home;
