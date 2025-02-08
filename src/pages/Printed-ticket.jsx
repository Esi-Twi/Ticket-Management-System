import { useEffect } from "react";


function PrintedTicket() {
    const numberOfTickets = JSON.parse(localStorage.getItem('tickets')) || [
        {
            name: 'Withdraw Money',
            var: 'W',
            tickets: 22
        }, {
            name: 'Deposit Money',
            var: 'D',
            tickets: 13
        }, {
            name: 'Cash Payment',
            var: 'C',
            tickets: 6
        }, {
            name: 'Bank Transfer',
            var: 'B',
            tickets: 3
        }, {
            name: 'Withdraw Cheque',
            var: 'Q',
            tickets: 9
        }, {
            name: 'Check Balance',
            var: 'K',
            tickets: 12
        }, {
            name: 'Mobile Money',
            var: 'M',
            tickets: 20
        }, {
            name: 'Create Account',
            var: 'A',
            tickets: 15
        }
    ]

    let phoneNumber = JSON.parse(localStorage.getItem('telephone'))
    let transfer = JSON.parse(localStorage.getItem('transaction'))

    let ticketIndex 
    numberOfTickets.forEach((ticket, index) => {
        if(ticket.name == transfer.tran) {
            ticket.tickets ++
            ticketIndex = index
        }
    })
    let ticket = numberOfTickets[ticketIndex]



    useEffect(() => {
        localStorage.setItem('tickets', JSON.stringify(numberOfTickets))
    },[])


    return (
        <section className="bg-black center h-screen flex-col">
            <div className="bg-white center flex-col w-[85%] med:w-[23rem] py-[2.5rem]">
                <h1 className="font-bold text-center text-lg med:text-3xl text-lime-500 mb-4">Curdearm Bank Plc</h1>

                <div className="flex items-center flex-col med:flex-row justify-between med:w-[85%]">
                    <p>{new Date().toDateString()}</p>
                    <p>{new Date().toLocaleTimeString()}</p>
                </div>

                <p className="mt-3">Hello {phoneNumber}</p>
                <p>Your ticket number is</p>
                <h1 className="font-bold text-6xl my-3">{ticket.var}{ticket.tickets < 10 ? '0' + ticket.tickets : ticket.tickets}</h1>
                <p className="text-center text-sm med:text-base w-[80%]">Thank you for banking with us</p>
            </div>

            <a href="/" className="text-white mt-5">Home</a>
        </section>
    )
}

export default PrintedTicket;