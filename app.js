var input= process.argv
var command = input[2]
var output =[{title:'',body:''}]

if (command==='list'){
    console.log('Printing '+ output.length+ ' note(s)');
        for (let i of output){
            console.log('--')
            console.log(i.title)
            console.log(i.body)
        }
}else if (command==='add'){
    if (input[3]==='--title' && input[4]!==undefined && input[5]==='--body' && input[6]!==undefined){
        output.push({title:input[4], body:input[6]});
        console.log('Note added');
        console.log(output)
    }else{
        console.log('Missing required arguments: title, body')
    }
}else if (command==='read'){
    if (input[3]==='--title' && input[4]!==undefined){
        for (let i in output){
            if (output[i].title===input[4]){
                console.log('Note found');
                console.log(output[i])
            }else{
                console.log('Note not found')
            }
        } 
    }else{
        console.log('Missing required argument: title')
    }
}else if (command==='remove'){
    if (input[3]==='--title' && input[4]!==undefined){
        for (let i in output){
            if (output[i].title===input[4]){
                output.splice(i,1)
                console.log('Note removed');
            }else{
                console.log('Note not found')
            }
        } 
    }else{
        console.log('Missing required argument: title')
    }
}