import clsx from "clsx";
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
  const { data, isError, isLoading, ref } = useStreamerList();

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !data) {
    return (
      <Error errorMessage="Cannot fetch streamer list. Check your internet connection and try again later." />
    );
  }

  if (data.pages[0].streamersCount === 0) {
    return (
      <p className={clsx(styles.emptyMessage, styles.container)}>
        Streamer list is empty.
      </p>
    );
  }

  return (
    <section className={styles.container}>
      <motion.ul
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
      <div ref={ref}></div>
    </section>
  );
};
