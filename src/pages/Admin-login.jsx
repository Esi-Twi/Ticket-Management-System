import { useState } from "react";

function AdminLogin() {
    const adminCredientials =[
        {
            id: '22241818', 
            password: '14238'
        },{
            id: '10483561', 
            password: '91230'
        },{
            id: '98374563', 
            password: '31141'
        },{
            id: '12234561', 
            password: '84763'
        },{
            id: '88233423', 
            password: '90002'
        },{
            id: '99871111', 
            password: '11187'
        },{
            id: '10020300', 
            password: '65432'
        },{
            id: '90099100', 
            password: '77277'
        },{
            id: '21141516', 
            password: '33452'
        },{
            id: '88432666', 
            password: '22422'
        },{
            id: '22346666', 
            password: '64333'
        },{
            id: '22241818', 
            password: '87111'
        },{
            id: '11223451', 
            password: '92344'
        },{
            id: '10234583', 
            password: '90112'
        },{
            id: '11184734', 
            password: '11121'
        } 
    ]    

    const [formData, setFormData] = useState({
        id: '', 
        password: ''
    })

    function getFormData(event) {

        const {name, value} = event.target

        setFormData((prevData) => {
            return {
                ...prevData, 
                [name] : value
            }
        })        
    }

    const [errors, setErrors] = useState({})

    function submitData(e) {
        e.preventDefault()
        const validationError = {}

        if(!formData.id.trim()) {
            validationError.id = 'id is required'
        }

        if(!formData.password.trim()) {
            validationError.password = 'password is required'
        } else if(formData.password.length != 5) {
            validationError.password = 'password is 5 characters long'
        }


        if(Object.keys(validationError).length ==0) {
            checkAuthentication()
        }

        setErrors(validationError)
    }

    function checkAuthentication() {
        console.log(formData);
        
        let isAdmin = false
        adminCredientials.forEach(admin => {
            if(admin.id == formData.id && admin.password == formData.password) {
                isAdmin = true
            } 
        })
        
        if(isAdmin) {
            window.location.href = '#/admin'
        } else {
            alert('invalid id or password')
        }
    }

    return(
        <section className="center flex-col h-screen">
            <div className="h-[50vh] w-[85%] med:w-[21rem] center flex-col">
                <h1 className="text-lg avg:text-2xl med:text-3xl text-center font-bold text-lime-500">Curdearm Bank Plc</h1>

                <div className="center flex-col rounded-2xl">
                    <h1 className="text-center font-bold med:text-2xl">Welcome Admin</h1>
                    <p className="text-center text-sm text-gray-600">Please enter your details</p>

                    <form onSubmit={submitData} className="mt-[1rem] center flex-col p-[5%] w-[11rem] avg:w-[13rem] med:w-[18rem]">
                        <div className="flex flex-col mb-4">
                            <label>ID</label>
                            <input className="border border-black rounded-md py-1 px-3 " placeholder="Enter your ID"
                            name="id"
                            autoComplete="off"
                            onChange={getFormData}/>
                            {errors.id && <span className="text-sm text-red-600">{errors.id}</span>}
                        </div>

                        <div className="flex flex-col">
                            <label>Password</label>
                            <input className="border border-black rounded-md py-1 px-3" placeholder="Enter your password" 
                            type="password"
                            name="password"
                            autoComplete="off"
                            onChange={getFormData}/>
                            {errors.password && <span className="text-sm text-red-600">{errors.password}</span>}
                        </div>
                    
                        <button className="bg-green-800 mt-4 w-[4.5rem] out:w-[6rem] text-center rounded-md py-1 text-white">Sign In</button>
                    </form>

                </div>
            </div>

            <a className="font-bold text-green-800 ml-[50%] out:ml-[16rem]" href="/">Home</a>
        </section>
    )
}

export default AdminLogin;