import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import { Error } from "@/components/error/error";
import { Loader } from "@/components/loader/loader";
import {
  listItemVariants,
  listVariants
} from "@/components/streamer-list/streamer-list.data";
import { useStreamerList } from "@/components/streamer-list/use-streamer-list";

import styles from "./streamer-list.module.scss";

export const StreamerList = () => {
  const { data, isError, isLoading, listRef } = useStreamerList();

  if (isLoading || !data) {
    return <Loader />;
  }

  if (isError) {
    return (
      <Error errorMessage="Cannot fetch streamer list. Check your internet connection and try again later." />
    );
  }

  return (
    <section className={styles.container}>
      <motion.ul
        ref={listRef}
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className={styles.list}>
        {data.pages.map((page) => {
          return page.streamersData.map(({ name, streamer_id }) => {
            return (
              <motion.li key={streamer_id} variants={listItemVariants}>
                <Link to={`/streamer/${streamer_id}`} className={styles.link}>
                  <img
                    src="https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
                    width={75}
                    height={75}
                    className={styles.image}
                  />
                  <span>{name}</span>
                  <ExternalLink className={styles.icon} />
                </Link>
              </motion.li>
            );
          });
        })}
      </motion.ul>
    </section>
  );
};
