import { List } from "@chakra-ui/react";

import JobCad from "./JobCad";
import { JobPositionAllResponse } from "../../services/jobDetail/jobDetailService.types";

type JobListProps = {
    jobs: JobPositionAllResponse["data"];
};

export default function JobsList({ jobs }: JobListProps) {
    return (
        <List
            display="flex"
            flexDirection="column"
            gap="16px"
            margin="0 auto"
            w="100%"
        >
            {jobs.map((job) => {
                return <JobCad key={job._id} {...job} />;
            })}
        </List>
    );
}
