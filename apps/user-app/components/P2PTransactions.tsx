import { Card } from "@repo/ui/card"
import { getServerSession } from "next-auth/next";
import { authOptions } from "../app/lib/auth";

export const  P2PTransactions=async({
    P2PTxns}:{
    P2PTxns:{
        time: Date,
        amount:number,
        toUser:number ,
        fromUser:number
    }[]
})=>{
    const session = await getServerSession(authOptions);
     const sessionUser = Number(session?.user?.id);
    if (!P2PTxns.length) {
        return <Card title="Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Transactions">
        <div className="pt-2">
            {P2PTxns.map(t => <div className="flex justify-between">
                <div>
                    <div className="text-sm">
                        {sessionUser===t.toUser?"Recieved INR" : "Sent INR"}
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    {sessionUser===t.toUser? `+ Rs ${t.amount }` : `- Rs ${t.amount}`}
                </div>

            </div>)}
        </div>
    </Card>
}