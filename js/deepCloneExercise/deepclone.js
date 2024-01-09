const deepclopne = (obj) => {
            const newobj = {}
            for (const key in obj) {
                        if (Object.hasOwnProperty.call(obj, key)) {
                                    const element = obj[key];
                                    if (typeof obj === "object") {
                                                newobj[key] = deepclopne(element)
                                    } else {
                                                newobj[key] = element
                                    }
                        }
            }
            return newobj
}


const sampleobj={name:"mahdi",age:20,nestedobj:{last:"Golzar"},fn:()=>{return 2}}
const cloneobj=deepclopne(sampleobj)
console.log(cloneobj,sampleobj!==cloneobj ,sampleobj.nestedobj !== cloneobj.nestedobj , typeof cloneobj.fn==="function");