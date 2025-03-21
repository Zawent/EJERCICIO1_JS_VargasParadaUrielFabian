
function delimitadores(string){
    string = String(string);
    let delimita = []
    let esEquilibrado = true

    for (let n of string) {
        if ((n == "[") || (n=="{") || (n == "(") || (n == "]") || (n=="}") || (n == ")")){
            delimita.push(n)
        }
    }

    for (let i = 0; i < (delimita.length/2); i++){
        
        let signoActual = delimita[i];
        console.log(signoActual)
        console.log(delimita[(delimita.length-1)-i])
        
        switch (signoActual) {
            case "[":
                if (delimita[(delimita.length-1)-i]=="]"){
                    // console.log("va bien")
                }else{
                    esEquilibrado = false
                }
                break;
            
            case "{":
                if (delimita[(delimita.length-1)-i]=="}"){
                    // console.log("va bien")
                }else{
                    esEquilibrado = false
                }
                break;

            case "(":
                if (delimita[(delimita.length-1)-i]==")"){
                    // console.log("va bien")
                }else{
                    esEquilibrado = false
                }
                break;

            default:
                esEquilibrado = false
                break;
        }
    }
    if (esEquilibrado){
        return "La frase " + string + " esta equilibrada"
    }else{
        return "La frase " + string + " NO esta equilibrada"
    }

}

console.log(delimitadores("{{}}()"))

