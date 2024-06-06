import JobPositionDetail from "../../../scenes/jobPositionDetail";
import { getJobDetail } from "../../../services/jobDetail";

async function callGetJobDetail(id: string) {
    return getJobDetail(id);
}

export default async function JobPositionDetailPage({
    params: { id },
}: {
    params: { id: string };
}) {
    const data = await callGetJobDetail(id);
    return <JobPositionDetail id={id} data={data} />;
}
