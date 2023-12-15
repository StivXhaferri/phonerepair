'use client'

import { useState , useEffect } from "react"

const Faq = () => {




    const [arr, setArr] = useState([false, false, false, false, false]);

    const openFaq = (num) => {
        const newArr = [...arr]; // Create a copy of the array
        newArr[num] = !newArr[num]; // Toggle the value at the specified index
        setArr(newArr); // Update the state with the modified array
    };





    return(
        <div  className="px-[10%]  py-0-10" >
            <h2 className="text-2xl font-bold bg-[#B9FF66] inline-block text-black">FAQ</h2>
            <br />
            <br/>
            <br/>
            <br/>
            <div className={arr[0]  === true ? "faq w-[80%] sm:w-full mx-auto my-2  bg-[#B9FF66]  p-3 rounded-lg border-2  border-[black]" :  "faq w-[80%] sm:w-full mx-auto my-2  bg-[white]  p-3 rounded-lg  border-2 border-black "}>
                <div className="p-3 flex w-[90%] mx-auto">
                    <div className="w-[50%] flex gap-3 items-center">
                        <h2 className="text-3xl font-bold">01</h2>
                        <h1 className="text-3xl font-bold">TITLE</h1>
                    </div>
                    <div className="w-[50%] flex justify-end">
                        <h2 className="cursor-pointer bg-white rounded-full font-bold text-3xl  p-3 border-2 border-solid h-[3rem] w-[3rem] flex items-center"  onClick={() => openFaq(0)} >+</h2>
                    </div>
                </div>
                <div className={arr[0] === true ? 'block' : 'hidden'}>
                    <div className="text-[black] p-[0.5px] w-[90%] mx-auto my-2  bg-[black]" />
                    <p className="w-[90%] text-[black] mx-auto ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sapiente amet enim voluptatem, commodi distinctio recusandae ipsa error nisi, ipsum harum perferendis dicta delectus numquam quam laborum repellendus ad? Laborum.
                    </p>
                </div>
            </div>


            <div className={arr[1]  === true ? "faq w-[80%] sm:w-full mx-auto my-2  bg-[#B9FF66]  p-3 rounded-lg border-2  border-[black]" :  "faq w-[80%] sm:w-full mx-auto my-2  bg-[white]  p-3 rounded-lg  border-2 border-black "}>
                <div className="p-3 flex w-[90%] mx-auto">
                    <div className="w-[50%] flex gap-3 items-center">
                        <h2 className="text-3xl font-bold">01</h2>
                        <h1 className="text-3xl font-bold">TITLE</h1>
                    </div>
                    <div className="w-[50%] flex justify-end">
                        <h2 className="cursor-pointer bg-white rounded-full font-bold text-3xl  p-3 border-2 border-solid h-[3rem] w-[3rem] flex items-center"  onClick={() => openFaq(1)} >+</h2>
                    </div>
                </div>
                <div className={arr[1] === true ? 'block' : 'hidden'}>
                    <div className="text-[black] p-[0.5px] w-[90%] mx-auto my-2  bg-[black]" />
                    <p className="w-[90%] text-[black] mx-auto ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sapiente amet enim voluptatem, commodi distinctio recusandae ipsa error nisi, ipsum harum perferendis dicta delectus numquam quam laborum repellendus ad? Laborum.
                    </p>
                </div>
            </div>



            <div className={arr[2]  === true ? "faq w-[80%] sm:w-full mx-auto my-2  bg-[#B9FF66]  p-3 rounded-lg border-2  border-[black]" :  "faq w-[80%] sm:w-full mx-auto my-2  bg-[white]  p-3 rounded-lg  border-2 border-black "}>
                <div className="p-3 flex w-[90%] mx-auto">
                    <div className="w-[50%] flex gap-3 items-center">
                        <h2 className="text-3xl font-bold">01</h2>
                        <h1 className="text-3xl font-bold">TITLE</h1>
                    </div>
                    <div className="w-[50%] flex justify-end">
                        <h2 className="cursor-pointer bg-white rounded-full font-bold text-3xl  p-3 border-2 border-solid h-[3rem] w-[3rem] flex items-center"  onClick={() => openFaq(2)} >+</h2>
                    </div>
                </div>
                <div className={arr[2] === true ? 'block' : 'hidden'}>
                    <div className="text-[black] p-[0.5px] w-[90%] mx-auto my-2  bg-[black]" />
                    <p className="w-[90%] text-[black] mx-auto ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sapiente amet enim voluptatem, commodi distinctio recusandae ipsa error nisi, ipsum harum perferendis dicta delectus numquam quam laborum repellendus ad? Laborum.
                    </p>
                </div>
            </div>




            <div className={arr[3]  === true ? "faq w-[80%] sm:w-full mx-auto my-2  bg-[#B9FF66]  p-3 rounded-lg border-2  border-[black]" :  "faq w-[80%] mx-auto my-2 sm:w-full  bg-[white]  p-3 rounded-lg  border-2 border-black "}>
                <div className="p-3 flex w-[90%] mx-auto">
                    <div className="w-[50%] flex gap-3 items-center">
                        <h2 className="text-3xl font-bold">01</h2>
                        <h1 className="text-3xl font-bold">TITLE</h1>
                    </div>
                    <div className="w-[50%] flex justify-end">
                        <h2 className="cursor-pointer bg-white rounded-full font-bold text-3xl  p-3 border-2 border-solid h-[3rem] w-[3rem] flex items-center"  onClick={() => openFaq(3)} >+</h2>
                    </div>
                </div>
                <div className={arr[3] === true ? 'block' : 'hidden'}>
                    <div className="text-[black] p-[0.5px] w-[90%] mx-auto my-2  bg-[black]" />
                    <p className="w-[90%] text-[black] mx-auto ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sapiente amet enim voluptatem, commodi distinctio recusandae ipsa error nisi, ipsum harum perferendis dicta delectus numquam quam laborum repellendus ad? Laborum.
                    </p>
                </div>
            </div>




            <div className={arr[4]  === true ? "faq w-[80%] sm:w-full mx-auto my-2  bg-[#B9FF66]  p-3 rounded-lg border-2  border-[black]" :  "faq w-[80%] sm:w-full mx-auto my-2  bg-[white]  p-3 rounded-lg  border-2 border-black "}>
                <div className="p-3 flex w-[90%] mx-auto">
                    <div className="w-[50%] flex gap-3 items-center">
                        <h2 className="text-3xl font-bold">01</h2>
                        <h1 className="text-3xl font-bold">TITLE</h1>
                    </div>
                    <div className="w-[50%] flex justify-end">
                        <h2 className="cursor-pointer bg-white rounded-full font-bold text-3xl  p-3 border-2 border-solid h-[3rem] w-[3rem] flex items-center"  onClick={() => openFaq(4)} >+</h2>
                    </div>
                </div>
                <div className={arr[4] === true ? 'block' : 'hidden'}>
                    <div className="text-[black] p-[0.5px] w-[90%] mx-auto my-2  bg-[black]" />
                    <p className="w-[90%] text-[black] mx-auto ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sapiente amet enim voluptatem, commodi distinctio recusandae ipsa error nisi, ipsum harum perferendis dicta delectus numquam quam laborum repellendus ad? Laborum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Faq