import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { P2PTransactions } from "../../../components/P2PTransactions";

async function getP2PTransactions() {
    const txns = await prisma.p2pTransfer.findMany({})


    return txns.map(t => ({
        time: t.timestamp,
        amount:Number(t.amount),
        toUser:Number(t.toUserId) ,
        fromUser:Number(t.fromUserId)
    }))
}


export default async function () {
    const P2PTxns= await getP2PTransactions();
    return (
        <div className="w-full">
        <Center>
                <div>
                    <P2PTransactions P2PTxns={P2PTxns}/>
                </div>
        </Center>
    </div>
    )
    
}