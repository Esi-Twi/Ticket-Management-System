import { Link } from "react-router-dom";
import {useState } from "react";


function Customer() {
    const [details, setDetails] = useState({
        getTicket: true,
        getNumber: false
    })

    function forNumber() {
        setDetails( (prevDetails) => {
            return {
                ...prevDetails,
                getTicket: false,
                getNumber: true
            }
        })

    }

     // -------------telephone number-----------------
     const [telephone, setTelephone] = useState([])
    
     const outputSpaces = document.querySelectorAll('.keys div')
 
     fillOutput()
 
     function getKey(event) {
         fillOutput()
 
         if(telephone.length < 10) {
             setTelephone((prevTel) => {
                 return [
                     ...prevTel, 
                     event.target.innerText
                 ]
             })    
         }
     }
 
     let savedTelephone
     function next() {
         if(telephone.length == 10) {
             savedTelephone =telephone.join('')     
             localStorage.setItem('telephone', JSON.stringify(savedTelephone))
             alert(`Hello ${savedTelephone} thanks for visiting Curdearm Bank Plc. Thank you for banking with us.`)
 
             //moving forward 
             setDetails( (prevDetails) => {
                 return {
                     ...prevDetails,
                     getTicket: false,
                     getNumber: false
                 }
             })
 
             window.location.href = '#/transaction'
 
         } else {
             alert('your phone number is not complete')
         }
     }

     function fillOutput() {
        telephone.forEach((i, num) => {
            outputSpaces[num].innerText = i
        })
    }

        function clear() {
            if(telephone.length >= 1) {
                outputSpaces.forEach(space => {
                    space.innerText = ' '
                })
        
                telephone.pop()            
                fillOutput()
            }
        }


    return (
        <section className="center h-screen">
            {details.getTicket && <div className="w-[85%] med:w-[78%] sm:w-[30rem] py-12 bg-black text-white center flex-col text-center">
            <p className="text-sm med:text-base">Welcome to </p>
            <h1 className="text-lime-400 font-bold text-lg avg:text-2xl med:text-3xl out:text-[40px]">Curdearm Bank Plc</h1>
            <h1 className="text-lime-400 font-bold med:text-xl">Ticket System</h1>
            <p className="mt-4 w-10/12 text-sm med:text-base">To have any transaction with us please follow the instructions to get a ticket</p>
            <div className="flex mt-6 gap-3 med:gap-4 flex-col med:flex-row">
                <p onClick={forNumber} className="cursor-pointer bg-green-800 text-sm py-[5px] px-5 rounded">Get Ticket</p>
                <Link to='/' className="bg-red-700 text-sm py-[5px] px-5 rounded">Go Home</Link>
            </div>
            </div> }
   

            {details.getNumber && 
                <div className="w-[90%] avg:w-[80%] med:w-[20rem] sm:w-[26rem] text-white bg-black py-12 center flex-col">
                    <h1 className="text-lime-400 text-center font-bold text-lg avg:text-2xl med:text-3xl sm:text-[40px]">Curdearm Bank Plc</h1>
                    <p className="text-sm med:text-lg mt-1 med:mt-2 text-center">Enter telephone number</p>

                    <div className="w-[90%] avg:w-[14rem] med:w-[17rem] center flex-col">
                        <div className="mt-4 med:mt-6 output flex gap-1 keys px-[1rem] md:px-[2rem] sm:px-[3.2rem] py-[5px] w-full center">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className="mr-1 avg:mr-4"></div>
                            <div></div>
                            <div></div>
                            <div className="mr-1 avg:mr-4"></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                        <div className="center w-[90%] sm:w-full my-6 gap-4 flex-wrap punch">
                            <p onClick={getKey}>1</p>
                            <p onClick={getKey}>2</p>
                            <p onClick={getKey}>3</p>
                            <p onClick={getKey}>4</p>
                            <p onClick={getKey}>5</p>
                            <p onClick={getKey}>6</p>
                            <p onClick={getKey}>7</p>
                            <p onClick={getKey}>8</p>
                            <p onClick={getKey}>9</p>
                            <p onClick={getKey}>0</p>
                        </div>

                        <div className="flex gap-3 med:gap-6 mt-3 flex-col avg:flex-row">
                            <p onClick={clear} className="bg-red-600 rounded cursor-pointer px-5 py-1">Clear</p>
                            <p onClick={next} className="bg-green-700 rounded cursor-pointer px-5 py-1">Next</p>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

export default Customer;