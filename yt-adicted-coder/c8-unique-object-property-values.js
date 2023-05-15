// the goal is to develop a fuction that looks for unique values in the array. 
// video for this problem https://www.youtube.com/watch?v=nmNvGHMtE2k
// the idea is to find only vendors in the following array
const productos = [
    {
        title:'Iphone 8',
        company:'apple'
    },
    {
        title:'Galaxy',
        company:'samsung'
    },{
        title:'Iphone 7',
        company:'apple'
    },{
        title:'Iphone Xs',
        company:'apple'
    },{
        title:'HTC Phone',
        company:'htc'
    },
]

// my solution
const uniqueVendors = arr => {
    const vendors = new Set()
    arr.map(item => vendors.add(item.company))
    return [...vendors]
}

console.log(uniqueVendors(productos))

// video's solution using set
const getUnique = arr => {
    const tempArray = arr.map(item => item.company)
    return [... new Set(tempArray)]
}


console.log(getUnique(productos))

// just one line solution solution
const getUnique2 = arr => [...new Set(arr.map(item => item.company))]

console.log(getUnique2(productos))


// using reduce - my solution
const uniqueVendors2 = arr => {
    const vendors = arr.reduce((tmp, item) => {
       if (tmp.lastIndexOf(item.company)===-1) {
        tmp.push(item.company)
       }
       return tmp 
    },[])
    return vendors
}
console.log(uniqueVendors2(productos))


const getUnique3 = arr => {
    return [...arr.reduce((tmp,item) => {
        tmp.add(item.company)
        return tmp
    }, new Set())]
}



console.log(getUnique3(productos))