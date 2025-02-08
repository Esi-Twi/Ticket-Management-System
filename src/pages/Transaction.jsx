import { useState } from "react";

function Transaction() {
    const transactions = [
        {
            tran: 'Withdraw Money',
            var: 'W',
            clicked: false
        }, {
            tran: 'Deposit Money',
            var: 'D',
            clicked: false
        }, {
            tran: 'Cash Payment',
            var: 'C',
            clicked: false
        }, {
            tran: 'Bank Transfer',
            var: 'B',
            clicked: false
        }, {
            tran: 'Withdraw Cheque',
            var: 'Q',
            clicked: false
        }, {
            tran: 'Check Balance',
            var: 'K',
            clicked: false
        }, {
            tran: 'Mobile Money',
            var: 'M',
            clicked: false
        }, {
            tran: 'Create Account',
            var: 'A',
            clicked: false
        }
    ]

    const [transButtons, setTransButtons] = useState(transactions)

    function getTransaction(mes) {
        setTransButtons((prevTrans) => {
            return prevTrans.map(trans => {
                return trans.tran == mes ? {...trans, clicked: !trans.clicked} : {...trans, clicked: false}
            })
        })
    }

    function nextAfterTransaction() {
        let transfer 

        transButtons.forEach(button => {
            if(button.clicked) {
                transfer = button
            }
        })

        localStorage.setItem('transaction', JSON.stringify(transfer))

        if(transfer) {
            window.location.href = '#/printed-ticket'
        } else {
            alert('Dear customer please choose a transaction to proceed')
        }
        
    }   


    return (
        <section className="h-screen center">
            {/* -------------select transaction------------ */}
            <div className="bg-black text-white  py-[2rem] out:py-[4rem] out:w-[28rem] sm:w-[35rem] center flex-col">
                <h1 className="text-lime-400 text-center font-bold text-lg med:text-3xl out:text-3xl">Curdearm Bank Plc</h1>
                <p className="mb-4 out:mb-7 text-sm text-center w-[90%] out:w-[25rem]">Please select the type of transaction you want to have with us.</p>

                <div className="trans-button center w-[80%] avg:w-[100%] med:w-[80%] mb-4 out:mb-8 flex-wrap gap-3 out:gap-6">
                    {transButtons.map((trans, id) => {
                        return <button key={id} onClick={() => getTransaction(trans.tran)} className={trans.clicked ? 'clicked' : 'bg-red-800'}>
                            {trans.tran}</button>
                    })}
                </div>

                <button onClick={nextAfterTransaction} className="bg-green-800 py-1 px-4 out:px-8 rounded">Next</button>
            </div>
        </section>
    )
}

export default Transaction;

