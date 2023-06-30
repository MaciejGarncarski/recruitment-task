import { motion } from "framer-motion";
import { ThumbsDown, ThumbsUp } from "lucide-react";

import { Button } from "@/components/button/button";
import { useVoteProgress } from "@/vote-progress/use-vote-progress";

import styles from "./vote-progress.module.scss";

type Props = {
  upVotes: number;
  downVotes: number;
  streamerId: number;
};

export const VoteProgres = ({ downVotes, upVotes, streamerId }: Props) => {
  const { handleDownVote, handleUpVote, progressWithPercent, progress } =
    useVoteProgress({ streamerId, downVotes, upVotes });

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Button
          variant="primary"
          type="button"
          text={upVotes.toString()}
          icon={<ThumbsUp />}
          onClick={handleUpVote}
        />
        <Button
          variant="primary"
          type="button"
          text={downVotes.toString()}
          icon={<ThumbsDown />}
          onClick={handleDownVote}
        />
      </div>
      <div className={styles.progressContainer}>
        <div className="visually-hidden">
          <progress max="100" value={progress}>
            {progressWithPercent}
          </progress>
        </div>
        <motion.div
          className={styles.progress}
          animate={{ width: progressWithPercent }}></motion.div>
      </div>
    </div>
  );
};
