const run= process()
console.log(run(67))
console.log(run(78))
console.log(run(90))


function process(){
    const arr = new Array(7000).fill("7");
    console.log("HELLO")
return (idx)=>arr[idx]

} 


function a(){
    let dada = "dada"
    return function b(){
        let papa = "papa"
        return function c(){
            let child = "child"
            return `${dada} > ${papa} > ${child}`
        }
    } 
}


console.log(a()()())



const baba = (string)=>(name)=>(name2)=>console.log(`${string} ${name} ${name2}`)
baba("i")("am")("pratik")