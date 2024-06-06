import LawOfficeUpdate from "@/scenes/lawOfficeUpdate";
import { getLawOfficeByHashId } from "@/services/lawOffices/lawService";

async function callGetLawOfficeHashId(hashId: string) {
    return getLawOfficeByHashId(hashId);
}

export default async function LawOfficeUpdatePage({
    params: { hashId },
}: {
    params: { hashId: string };
}) {
    const data = await callGetLawOfficeHashId(hashId);

    return <LawOfficeUpdate data={data} />;
}
