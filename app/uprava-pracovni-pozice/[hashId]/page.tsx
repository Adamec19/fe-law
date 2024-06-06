import JobPositionUpdate from "@/scenes/jobPositionUpdate";
import { getJobPositionByHashId } from "@/services/jobDetail/jobDetailService";

async function callGetJobHashId(hashId: string) {
    return getJobPositionByHashId(hashId);
}

export default async function JobPositionUpdatePage({
    params: { hashId },
}: {
    params: { hashId: string };
}) {
    const data = await callGetJobHashId(hashId);
    return <JobPositionUpdate data={data} />;
}
