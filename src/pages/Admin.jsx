import TicketChart from "./TicketChart";

function Admin() {
    const tickets = JSON.parse(localStorage.getItem('tickets'))

    
    return (
        <section>
               {/*--------------right section-----------------  */}
               <div className="w-screen">
                {/* --------welcome------- */}
                <div className="border-b border-black px-2 med:px-5 py-2 flex med:items-center med:justify-between flex-col med:flex-row">
                    <div>
                        <h1 className="font-bold med:text-xl md:text-2xl">Hey, Kevin Dukkon!</h1>
                        <p className="text-gray-600 text-sm med:test-base">hey@kevdu.co</p>
                        <p className="mt-1 text-sm med:text-base">{new Date().toDateString()}</p>
                    </div>
                    <a href="/" className="text-green-800 mr-4 text-end font-bold text-sm med:text-lg">Home</a>
                </div>

                {/* --------summary section-------- */}
                <div className="summary w-[9rem] avg:w-[85%] ml-[1.4rem] avg:ml-3 border flex-wrap flex justify-center gap-3 avg:gap-[1.5rem] border-gray-500 rounded-lg p-3 mx-2 med:mx-7 my-2 med:my-4">
                    {tickets.map((ticket, index) => {
                            return <div key={index}>
                                <h1>{ticket.name}</h1>
                                <p>{ticket.tickets}</p>
                            </div>
                        })}
                </div>


                <div className="m-auto">
                    <TicketChart />
                </div>
            </div>
        </section>
    )
}

export default Admin;