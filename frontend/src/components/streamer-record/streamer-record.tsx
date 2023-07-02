import clsx from "clsx";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import { Avatar } from "@/components/avatar/avatar";
import { Error } from "@/components/error/error";
import { Loader } from "@/components/loader/loader";
import { Nav } from "@/components/nav/nav";
import { containerVariants } from "@/components/streamer-record/streamer-record.data";
import { useSingleStreamer } from "@/hooks/use-single-streamer";
import { getPlatformLogo } from "@/utils/get-platform-logo";
import { VoteProgres } from "@/vote-progress/vote-progress";

import styles from "./streamer-record.module.scss";

export const StreamerRecord = () => {
  const { streamerId } = useParams();

  const { data, isLoading, isError } = useSingleStreamer({
    streamerId: parseInt(streamerId || "")
  });

  if (!data || isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <>
        <div className={styles.nav}>
          <Nav />
        </div>
        <Error errorMessage="Cannot fetch this streamer. Check your internet connection and try again later." />
      </>
    );
  }

  const {
    downVotes,
    streamerData: { description, name, platform },
    upVotes
  } = data;

  const logo = getPlatformLogo(platform);

  return (
    <>
      <div className={styles.nav}>
        <Nav />
      </div>
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.record}>
        <Avatar />
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <figure
          className={clsx(styles.platform, styles[platform.toLowerCase()])}>
          <img
            src={logo}
            alt={platform}
            width={100}
            height={50}
            className={styles.platformLogo}
          />
        </figure>

        <VoteProgres
          downVotes={downVotes}
          upVotes={upVotes}
          streamerId={parseInt(streamerId || "")}
        />
      </motion.main>
    </>
  );
};
